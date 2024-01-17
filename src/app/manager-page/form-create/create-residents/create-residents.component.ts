import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../../app/service/config/firebaseConfig";
import { Location } from '@angular/common'
@Component({
  selector: 'app-create-residents',
  templateUrl: './create-residents.component.html',
  styleUrls: ['./create-residents.component.scss']
})
export class CreateResidentsComponent {
  _topicHeader:string = 'เพิ่มรายชื่อผู้พักอาศัย'
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
    
    if(result.name == "" || result.mobileNo == "" || result.gender == ""|| result.DateOfWorker == "" || result.employeeId == "" || result.DateOfBirth == "" || result.pass1 == "" || result.pass2 == ""){
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
    await setDoc(doc(firestore, "Residents",result.employeeId), docData);
    this.location.back()
  }

  getRandomId() {
    return "00"+Math.floor(Math.random() * 1000) + 1

  }
}
