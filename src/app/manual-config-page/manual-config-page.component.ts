import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../app/service/config/firebaseConfig";

@Component({
  selector: 'app-manual-config-page',
  templateUrl: './manual-config-page.component.html',
  styleUrls: ['./manual-config-page.component.scss']
})
export class ManualConfigPageComponent implements OnInit {


  datafirestore: any
  dataYear: any = []
  querySigleObject: any
  dataVitalSign: any = []
  dataVitalSignHeader: any = []

  userTestName: string = 'Pannatat Saman'
  currentVitalSign: any

  _selectVitalSign:string = 'tempbody'
  
  ngOnInit(): void {
    // this.queryFireStore()
    this.queryVitalSign()
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
    const data = query(collection(firestore, 'data'), where("name", "==", this.userTestName));
    console.log('Sigle data', data);
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      this.querySigleObject = JSON.stringify(doc.data())
    });
  }

  async createObject() {
    const docData = {
      name: this.userTestName,
    }
    await setDoc(doc(firestore, "data", this.userTestName), docData);
    this.queryFireStore()
  }

  async deleteDoc() { //Pass
    var data = [
      this.userTestName,
    ]
    data.forEach(async (res) => {
      await deleteDoc(doc(firestore, "data", res));
    })
  }
  getRandomId() {
    return Math.floor(Math.random() * 1000000) + 1;

  }

  formattedDate() {
    const stringify = JSON.stringify(Date())
    const date = new Date(stringify);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;;
    // return `${day}/${month}/${year}`;
  }

  async updatePushData() { //pass
    const docData = {
      id: this.getRandomId(),
      temp: Math.floor(Math.random() * 100) + 1,
      unit: 'C',
      date: this.formattedDate()
    };

    let pathUpdate: any = '2024' + "." + '1' + "." + 'vital_sign' + "." + this._selectVitalSign
    await updateDoc(doc(firestore, "data", this.userTestName), {
      [pathUpdate]: arrayUnion(docData)
    });
    this.queryVitalSign()
  }
  async createtitNameData() { //pass
    const docData = {
      // id: this.getRandomId(),
      // temp: Math.floor(Math.random() * 100) + 1,
      // unit: 'C',
      // date: this.formattedDate()
    };

    let pathUpdate: any = '2024' + "." + '1' + "." + 'vital_sign' + "." + this._selectVitalSign
    await updateDoc(doc(firestore, "data", this.userTestName), {
      [pathUpdate]: arrayUnion(docData)
    });
    this.queryVitalSign()
  }

  async updateDeleteObject(index?: any) {
    const docRef = doc(firestore, "data", this.userTestName);
    this.currentVitalSign['2024']['1']['vital_sign'][this._selectVitalSign][index] = {};
    await updateDoc(docRef, this.currentVitalSign);
    this.queryVitalSign()
  }

  async updateDeleteAll() {
    const docRef = doc(firestore, "data", this.userTestName);
    this.currentVitalSign['2024']['1']['vital_sign'][this._selectVitalSign] = {};
    await updateDoc(docRef, this.currentVitalSign);
    this.queryVitalSign()
  }

  async queryVitalSign() { //pass
    this.dataVitalSign = []
    const docRef = doc(firestore, "data", this.userTestName);
    const docSnap = await getDoc(docRef);
    this.currentVitalSign = docSnap.data();
    if (this.currentVitalSign['2024']['1']['vital_sign'][this._selectVitalSign].length >= 0) {
      this.dataVitalSign = this.currentVitalSign['2024']['1']['vital_sign'][this._selectVitalSign]
      this.dataVitalSignHeader= Object.keys(this.currentVitalSign['2024']['1']['vital_sign'])
      // console.log('dataVitalSign', Object.keys(array));
      // Object.keys(array).forEach((item)=>{
      //   this.dataVitalSignHeader.push(item)
      // })
      // console.log('dataVitalSignHeader',this.dataVitalSignHeader);
    }
  }

  returnVelue(velue: any) {
    return Object.values(velue)
  }

}
