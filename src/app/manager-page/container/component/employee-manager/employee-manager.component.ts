import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WorkDatabaseService } from 'src/app/service/work-service/work-database.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.scss']
})
export class EmployeeManagerComponent {
  currentEmployee: any = []
  currentDuies:any = []
  _selcetEmp:any = ''
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
    this.WorkService.queryCollection('employee').then((data: any) => {
      data.forEach(async (outerDoc:any) => {
        const outerData = outerDoc.data();
        this.currentEmployee.push(outerData)
      });
      this._selcetEmp =  this.currentEmployee[0].employee || ''
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
    this._selcetEmp = data.employee
    this.objectDuties(data)
  }
}
