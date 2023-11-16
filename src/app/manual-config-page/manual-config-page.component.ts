import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../app/service/config/firebaseConfig";

import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-manual-config-page',
  templateUrl: './manual-config-page.component.html',
  styleUrls: ['./manual-config-page.component.scss']
})
export class ManualConfigPageComponent implements OnInit {


  datafirestore: any
  keysUser: any = []
  querySigleObject: any
  dataVitalSign: any = []
  dataVitalSignHeader: any = []

  userTestName: string = 'Pannatat Saman'
  currentVitalSign: any
  currentTopicWorks: any = []
  currentSubTopicWorks: any = []

  _selectMainTopic: string = 'tempbody'
  _selectSubTopic: string = ''

  //form
  selectUsere:any = new FormControl('');

  ngOnInit(): void {
    // this.queryFireStore()
    this.queryVitalSign()
    this.queryTopicWorks()
  }

  createUser() {
    this.userTestName =  this.selectUsere.value
    this.selectUsere.setValue('');
    if( this.userTestName){
      console.log('selectUsere',this.selectUsere.value);
      this.createObject()
    }
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
      object.push(outerId)

    });
    this.keysUser = object
    console.log('dataYear', this.keysUser);
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

  async deleteDoc(iduser:any) { //Pass
    var data = [
      iduser,
    ]
    data.forEach(async (res) => {
      await deleteDoc(doc(firestore, "data", res));
    })
    this.queryVitalSign()
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

    let pathUpdate: any = '2024' + "." + '1' + "." + this._selectMainTopic + "." + this._selectSubTopic
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

    let pathUpdate: any = '2024' + "." + '1' + "." + 'vital_sign' + "." + this._selectMainTopic
    await updateDoc(doc(firestore, "data", this.userTestName), {
      [pathUpdate]: arrayUnion(docData)
    });
    this.queryVitalSign()
  }

  async updateDeleteObject(index?: any) {
    const docRef = doc(firestore, "data", this.userTestName);
    this.currentVitalSign['2024']['1'][this._selectMainTopic][this._selectSubTopic][index] = {};
    await updateDoc(docRef, this.currentVitalSign);
    this.queryVitalSign()
  }
  // this._selectMainTopic+ "." + this._selectSubTopic
  async updateDeleteAll() {
    const docRef = doc(firestore, "data", this.userTestName);
    this.currentVitalSign['2024']['1'][this._selectMainTopic][this._selectSubTopic] = {};
    await updateDoc(docRef, this.currentVitalSign);
    this.queryVitalSign()
  }

  async queryVitalSign() { //pass
    this.dataVitalSign = []
    this.queryFireStore()
    const docRef = doc(firestore, "data", this.userTestName);
    const docSnap = await getDoc(docRef);
    this.currentVitalSign = docSnap.data();
    console.log('this.currentVitalSign',this.currentVitalSign);
    
    if (this.currentVitalSign && this.currentVitalSign['2024'] && this.currentVitalSign['2024']['1'] && this.currentVitalSign['2024']['1'][this._selectMainTopic] && this.currentVitalSign['2024']['1'][this._selectMainTopic][this._selectSubTopic] && this.currentVitalSign['2024']['1'][this._selectMainTopic][this._selectSubTopic].length >= 0) {
      this.dataVitalSign = this.currentVitalSign['2024']['1'][this._selectMainTopic][this._selectSubTopic]
      this.dataVitalSignHeader = Object.keys(this.currentVitalSign['2024']['1'][this._selectMainTopic])
    }
  }

  async queryTopicWorks() { //pass
    this.currentTopicWorks = []
    const docRef = doc(firestore, "manager", "mainTopicWorks");
    const docSnap = await getDoc(docRef);
    let objectTopic: any = docSnap.data();
    Object.keys(objectTopic).forEach((topic: any, i) => {
      if (objectTopic[topic]) {
        this.currentTopicWorks.push(topic)
      }
    })
  }

  async querySubTopicWorks(topicGroup: any) { //pass
    this._selectSubTopic = ''
    this.currentSubTopicWorks = []
    const docRef = doc(firestore, "manager", "subTopicWork");
    const docSnap = await getDoc(docRef);
    let objectTopic: any = docSnap.data();
    Object.keys(objectTopic).forEach((topic: any, i) => {
      if (objectTopic[topic].ative && objectTopic[topic].group == topicGroup) {
        this.currentSubTopicWorks.push(topic)
      }
    })
  }

  returnVelue(velue: any) {
    return Object.values(velue)
  }

}
