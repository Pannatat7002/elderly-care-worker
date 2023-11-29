import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { jwtDecode } from "jwt-decode";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    private cookieService: CookieService,


  ) { }

  jwt_decode(token: string) {
    return jwtDecode(token);
  }

  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password)
  }
  SignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(getAuth(), email, password)
  }

  SignOut() {
    localStorage.clear()
    sessionStorage.clear()
    this.cookieService.deleteAll()
    signOut(getAuth())
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.router.navigate([''])
    }, 1000);
    // return signOut(getAuth())
  }
  getAuth() {
    return getAuth()
  }

  async checkActive(): Promise<any> { //pass
    return new Promise((resolve) => {
      this.afAuth.onAuthStateChanged((user) => {
        console.log('onAuthStateChanged', user);

        resolve(user);
      });
    });
  }

  getIpAddress() {
    return axios.get('https://api.ipify.org?format=json')
      .then(response => response.data.ip)
      .catch(error => {
        console.error('Error getting IP address:', error);
        return null;
      });
  }
}
