import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { jwtDecode } from "jwt-decode";
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../service/config/firebaseConfig";
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

  SignOut() {
    return this.afAuth.signOut()
  }
  //Firebase getData Firestore
  async querySigle(collectionName: string, fieldName: string, field: string) {
    const data = query(collection(firestore, collectionName), where(fieldName, "==", field));
    let userProfile: any
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      userProfile = doc.data()
    });
    return userProfile
  }


  async queryTopicWorks(collectionName: string, fieldName: string) { //pass
    let currentTopicWorks:any[] = []
    const docRef = doc(firestore, collectionName, fieldName);
    const docSnap = await getDoc(docRef);
    let objectTopic: any = docSnap.data();
    return objectTopic
  }

  async querySubTopicWorks(collectionName: string, fieldName: string) { //pass
    let currentSubTopicWorks: any[] = []
    const docRef = doc(firestore, collectionName, fieldName);
    const docSnap = await getDoc(docRef);
    let objectSubTopic: any = docSnap.data();
    return objectSubTopic
  }
}
