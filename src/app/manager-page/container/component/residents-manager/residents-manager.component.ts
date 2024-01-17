import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WorkDatabaseService } from 'src/app/service/work-service/work-database.service';
import { Location } from '@angular/common'
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../../../app/service/config/firebaseConfig";

@Component({
  selector: 'app-residents-manager',
  templateUrl: './residents-manager.component.html',
  styleUrls: ['./residents-manager.component.scss']
})
export class ResidentsManagerComponent {
  currentEmployee: any = []
  currentDuies:any = []
  _selcetEmp:any = ''
  _topicHeader:string = 'แสดงรายชื่อผู้พักอาศัย'
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
    this.WorkService.queryCollection('Residents').then((data: any) => {
    // this.WorkService.queryCollection('employee').then((data: any) => {
      data.forEach(async (outerDoc:any) => {
        const outerData = outerDoc.data();
        this.currentEmployee.push(outerData)
      });
      this._selcetEmp =  this.currentEmployee[0].employee || ''
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
    this.router.navigate(['/manager/Residents-Create'])
  }
  goToUpdateUser(data:any){
    this.router.navigate(['/manager/Residents-Update'],{ queryParams: { ID: data.employeeId }})
  }

  deleteUser(data:any){
    this.selectUser = data
  }

  
  async deleteDoc() { //Pass
    await deleteDoc(doc(firestore, "Residents", this.selectUser.employeeId));
    this.queryEmployee()
  }
}
