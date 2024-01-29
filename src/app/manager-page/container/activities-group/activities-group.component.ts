import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WorkDatabaseService } from 'src/app/service/work-service/work-database.service';
import { Location } from '@angular/common'
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../service/config/firebaseConfig";

@Component({
  selector: 'app-activities-group',
  templateUrl: './activities-group.component.html',
  styleUrls: ['./activities-group.component.scss']
})
export class ActivitiesGroupComponent {
  currentEmployee: any = []
  currentDuies:any = []
  _selcetEmp:any = ''
  _topicHeader:string = 'กิจกรรมจิตใจและสังคม'
  _selcetCategory:string = 'ทั้งหมด'
  selectUser:any = []
  category:any = []

  constructor(
    private router: Router,
    private WorkService: WorkDatabaseService,
    private sanitizer: DomSanitizer,
    private location:Location
  ) {}

  
  ngOnInit(): void {
    this.queryEmployee()
    this.queryCategory("จิตใจและสังคม")

    // this.querymenuSubTopic()
  }
  async queryEmployee(filter?:string) { //pass
    this.currentEmployee = []
    this.WorkService.queryCollection('Activities').then((data: any) => {
    // this.WorkService.queryCollection('employee').then((data: any) => {
      data.forEach(async (outerDoc:any) => {
        const outerData = outerDoc.data();
        if(filter){
          if(outerData && outerData.ActivityCategory === filter || filter === "ทั้งหมด"  ){
            this.currentEmployee.push(outerData)
          }
        } else {
          this.currentEmployee.push(outerData)
        }
      });
      this._selcetEmp =  this.currentEmployee[0].activitieID || ''
      console.log('this.currentEmployee',this.currentEmployee);
    })
    
  }

    objectDuties(duties:any){
      this.currentDuies = []
      Object.keys(duties['Set duties']).forEach((res:any)=>{
        if(duties['Set duties'][res]){
          this.currentDuies.push(res)
        }
      })
    }

    back(): void {    
    this.location.back()
  }

  selectEmployee(data:any){
    this._selcetEmp = data
    // this.objectDuties(data)
  }
  selectCategory(data:string){
    this._selcetCategory = data||"ทั้งหมด"
    this.queryEmployee(this._selcetCategory)
    // this.objectDuties(data)
  }

  goToCreateUser(){
    this.router.navigate(['/manager/Activities-Create'])
  }
  goToUpdateUser(data:any){
    this.router.navigate(['/manager/Activities-Update'],{ queryParams: { ID: data.activitieID }})
  }

  deleteUser(data:any){
    this.selectUser = data
  }

  
  async deleteDoc() { //Pass
    await deleteDoc(doc(firestore, "Activities", this.selectUser.activitieID));
    this.queryEmployee()
  }

  async queryCategory(ID: any) {
    const data = query(collection(firestore, 'Category'));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc:any) => {
      if(doc.id == ID){
        this.category =  Object.values(doc.data())
        this.category.push('ทั้งหมด')
        console.log(' this.category', this.category);
        
      }
    });
  }
}
