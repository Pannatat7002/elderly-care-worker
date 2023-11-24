import { Component } from '@angular/core';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../../service/config/firebaseConfig";
import { CookieService } from '../../../../service/cookie-service/cookie.service';
import { AuthService } from '../../../../service/auth-service/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  constructor(

  ) { }

  ngOnInit(): void {
  }

  writeUserData(user: any) {
    // firebase.database().ref('users/' + user.uid).set(user).catch(error => {
    //   console.log(error.message)
    // });
  }

  createNewAccount() {
    // try {
    //   const userAuth = await firebase.auth().createUserWithEmailAndPassword(email, password);
    //   var user = {
    //     name: "Raja",
    //     phone: "779797329",
    //     address: "474 Mercer Drive",
    //     uid: userAuth.uid,
    //     email: userAuth.email
    //   }
    //   writeUserData(user)

    // } catch (error) {
    //   console.log(error.message)
    // }
  }
}
