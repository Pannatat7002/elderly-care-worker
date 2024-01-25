import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WorkDatabaseService } from 'src/app/service/work-service/work-database.service';
import { Location } from '@angular/common'
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../service/config/firebaseConfig";
@Component({
  selector: 'app-general-group',
  templateUrl: './general-group.component.html',
  styleUrls: ['./general-group.component.scss']
})
export class GeneralGroupComponent {
  _topicHeader:any = 'งานทั่วไป'
  currentEmployee: any = []
  currentDuies:any = []
  _selcetEmp:any = ''
  selectUser:any = []

  constructor(
    private router: Router,
    private WorkService: WorkDatabaseService,
    private sanitizer: DomSanitizer,
    private location:Location
  ) {}

  
  ngOnInit(): void {
    this.queryEmployee()
    // this.querymenuSubTopic()
  }
  async queryEmployee() { //pass
    this.currentEmployee = []
    this.WorkService.queryCollection('Activities').then((data: any) => {
    // this.WorkService.queryCollection('employee').then((data: any) => {
      data.forEach(async (outerDoc:any) => {
        const outerData = outerDoc.data();
        this.currentEmployee.push(outerData)
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

  goToCreateUser(){
    this.router.navigate(['/manager/General-Create'])
  }
  goToUpdateUser(data:any){
    this.router.navigate(['/manager/General-Update'],{ queryParams: { ID: data.activitieID }})
  }

  deleteUser(data:any){
    this.selectUser = data
  }

  
  async deleteDoc() { //Pass
    await deleteDoc(doc(firestore, "Activities", this.selectUser.activitieID));
    this.queryEmployee()
  }
}
