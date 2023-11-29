import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { jwtDecode } from "jwt-decode";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
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
    return signOut(getAuth())
  }
  getAuth() {
    return getAuth()
  }

  async checkActive(): Promise<any> { //pass
    return new Promise((resolve) => {
      this.afAuth.onAuthStateChanged((user) => {console.log('onAuthStateChanged',user);
      
        resolve(user);
      });
    });
  }
}
