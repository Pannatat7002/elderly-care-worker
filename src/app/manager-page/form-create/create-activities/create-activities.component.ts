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
  aid:string = ''
  category:any = []
  constructor(
    private router: Router,
    private location: Location,

  ){
  }

  ngOnInit(): void {
    this.getRandomId()
    this.querySigle("จิตใจและสังคม")
  }

  getActivityCategory(){
    
  }
  // goToCreateUSer(){
  //   this.router.navigate(['/manager/form-user'])
  // }
  submitFormCreate(result: any) {
    console.log('submitFormCreate',result);
    
    if(result.ActivityName == "" || result.ActivityType == "" || result.owner == "" || result.ActivityCategory ==""){
      this.alertError = JSON.stringify("กรุณากรอกข้อมูลให้ครบทุกช่อง")
    } else {
      this.createUser(result)
    }
  }

  async createUser(result:any) {
    result.createTime = new Date();
    result.activitieID =  this.aid  
    const docData = result    
    await setDoc(doc(firestore, "Activities",result.activitieID), docData);
    this.location.back()
  }

  getRandomId() {
    this.aid = "A00"+Math.floor(Math.random() * 1000) + 1
  }

  async querySigle(ID: any) {
    const data = query(collection(firestore, 'Category'));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc:any) => {
      if(doc.id == ID){
        this.category =  Object.values(doc.data())
        console.log(' this.category', this.category);
        
      }
    });
  }
}
