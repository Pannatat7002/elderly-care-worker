import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../../app/service/config/firebaseConfig";
import { Location } from '@angular/common'
@Component({
  selector: 'app-update-activities',
  templateUrl: './update-activities.component.html',
  styleUrls: ['./update-activities.component.scss']
})
export class UpdateActivitiesComponent {
  _topicHeader: string = 'แก้ไขข้อมูกิจกรรม'
  alertError: any
  userData:any = []
  category:any = []
  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let activitieID = params['ID'];
      this.querySigle(activitieID)
    });
    this.queryCategory("จิตใจและสังคม")

  }

  submitFormCreate(result: any) {
    console.log('submitFormCreate',result);
    
    // if (!!result.pass1 && !!result.pass2 &&result.pass1 !== result.pass2) {
    //   this.alertError = JSON.stringify("กรุณากรอกรหัสผ่านให้ถูกต้อง")
    // } else {
      this.updateUser(result)
    // }
  }

  async updateUser(result: any) {
    Object.values(result).forEach((res:any,index)=>{
      if(res !== ""){
        console.log('result[index]',Object.keys(result)[index]);
        console.log('index',index);
        
        this.userData[Object.keys(result)[index]] = res
        console.log('this.userData',this.userData);
      }
    })
    await setDoc(doc(firestore, "Activities", this.userData.activitieID), this.userData);
    this.location.back()
  }

  async querySigle(activitieID: any) {
    const data = query(collection(firestore, 'Activities'), where("activitieID", "==", activitieID));
    console.log('Sigle data', data);
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      console.log('doc', doc);

      console.log(doc.id, " => ",doc.data());
      this.userData = doc.data()
      // this.querySigleObject = JSON.stringify(doc.data())
    });
  }

  
  async queryCategory(ID: any) {
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
