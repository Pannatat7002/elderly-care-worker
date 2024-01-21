import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../../app/service/config/firebaseConfig";
import { Location } from '@angular/common'
@Component({
  selector: 'app-create-activities',
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.scss']
})
export class CreateActivitiesComponent {
  _topicHeader:string = 'กรอกข้อมูลกิจกรรม'
  alertError: any

  constructor(
    private router: Router,
    private location: Location,

  ){

  }

  // goToCreateUSer(){
  //   this.router.navigate(['/manager/form-user'])
  // }
  submitFormCreate(result: any) {
    console.log('submitFormCreate',result);
    
    if(result.name == "" || result.mobileNo == "" || result.gender == ""|| result.DateOfWorker == "" || result.username == "" || result.DateOfBirth == "" || result.pass1 == "" || result.pass2 == ""){
      this.alertError = JSON.stringify("กรุณากรอกข้อมูลให้ครบทุกช่อง")
    } else if(result.pass1 !== result.pass2){
      this.alertError = JSON.stringify("กรุณากรอกรหัสผ่านให้ถูกต้อง")
    } else {
      this.createUser(result)
    }
  }

  async createUser(result:any) {
    result.createTime = new Date();
    delete result.pass2
    const docData = result    
    await setDoc(doc(firestore, "Activities",result.username), docData);
    this.location.back()
  }

  getRandomId() {
    return "00"+Math.floor(Math.random() * 1000) + 1

  }
}
