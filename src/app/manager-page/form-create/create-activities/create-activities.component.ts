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
    
    if(result.activitieID == "" || result.ActivityName == "" || result.status == ""|| result.ActivityType == "" || result.owner == "" || result.ActivityImage == "" || result.Description == "" || result.comment == ""){
      this.alertError = JSON.stringify("กรุณากรอกข้อมูลให้ครบทุกช่อง")
    } else {
      this.createUser(result)
    }
  }

  async createUser(result:any) {
    result.createTime = new Date();
    // delete result.pass2
    const docData = result    
    await setDoc(doc(firestore, "Activities",result.activitieID), docData);
    this.location.back()
  }

  getRandomId() {
    return "A00"+Math.floor(Math.random() * 1000) + 1

  }
}
