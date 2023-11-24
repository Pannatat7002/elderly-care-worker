import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { jwtDecode } from "jwt-decode";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }
  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  SignOut() {
    return this.afAuth.signOut()
  }
  getAuth() {
    const auth = getAuth();
    console.log('auth',auth);
    
  }
}
