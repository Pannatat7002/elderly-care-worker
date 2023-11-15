import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../app/service/config/firebaseConfig";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elderly_care_worker';
  eventLoading:boolean = false

  datafirestore: any
  dataYear: any = []
  querySigleObject: any
  dataVitalSign: any = []
  constructor(
    private db: AngularFirestore,
    // private firestore: AngularFirestore
  ) {
    // this.queryFireStore()
    // this.queryVitalSign()
  }

  Loading(event:boolean){
    this.eventLoading = event
  }











  async queryFireStore() {
    let object: any = []
    const outerCollectionRef = collection(firestore, 'data');
    const outerQuerySnapshot = await getDocs(outerCollectionRef);
    outerQuerySnapshot.forEach(async (outerDoc) => {
      const outerData = outerDoc.data();
      const outerId = outerDoc.id;
      console.log('outerId', outerId);
      console.log('outerData', outerData);
      object.push(outerData)

    });
    this.dataYear = object
    console.log('dataYear', this.dataYear);
  }

  async querySigle() {
    const data = query(collection(firestore, 'data'), where("name", "==", "Pannnatat Saman"));
    console.log('Sigle data', data);
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      this.querySigleObject = JSON.stringify(doc.data())
    });
  }

  async createObject() {
    const docData = {
      name: "Pannnatat Saman",
    }
    await setDoc(doc(firestore, "data", "Pannnatat Saman"), docData);
  }

  async deleteDoc() { //Pass
    var data = [
      "Pannnatat Saman",
    ]
    data.forEach(async (res) => {
      await deleteDoc(doc(firestore, "data", res));
    })
  }

  async updatePushData() { //pass
    const docData = {
      temp: '36',
      unit: 'C',
      date: new Date()
    };

    await updateDoc(doc(firestore, "data", "Pannnatat Saman"), {
      "2024.1.vital_sign.tempbody": arrayUnion(docData)
    });
    this.queryVitalSign()
  }

  async updateDeleteObject(index?: any) {
    const docRef = doc(firestore, "data", "Pannnatat Saman");
    const docSnap = await getDoc(docRef);
    const currentData: any = docSnap.data();
    currentData['2024']['1']['vital_sign']['tempbody'][index] = {};
    await updateDoc(docRef, currentData);
    this.queryVitalSign()
  }

  async updateDeleteAll() {
    const docRef = doc(firestore, "data", "Pannnatat Saman");
    const docSnap = await getDoc(docRef);
    const currentData: any = docSnap.data();
    currentData['2024']['1']['vital_sign']['tempbody'] = {};
    await updateDoc(docRef, currentData);
    this.queryVitalSign()
  }

  async queryVitalSign() { //pass
    this.dataVitalSign = []
    const docRef = doc(firestore, "data", "Pannnatat Saman");
    const docSnap = await getDoc(docRef);
    const currentData: any = docSnap.data();
    // const pathToTempBody = "2024.1.vital_sign.tempbody";
    if (currentData['2024']['1']['vital_sign']['tempbody'].length >= 0) {
      this.dataVitalSign = currentData['2024']['1']['vital_sign']['tempbody']
      console.log('dataVitalSign', this.dataVitalSign);
    }
  }

  returnVelue(velue: any) {
    return Object.values(velue)
  }

}
