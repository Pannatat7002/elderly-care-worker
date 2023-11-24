import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WorkDatabaseService } from 'src/app/service/work-service/work-database.service';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.scss']
})
export class EmployeeManagerComponent {
  currentEmployee: any
  constructor(
    private router: Router,
    private WorkService: WorkDatabaseService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.queryEmployee()
    // this.querymenuSubTopic()
  }
  async queryEmployee() { //pass
    this.currentEmployee = []
    this.WorkService.queryCollection('employee').then((data: any) => {
      // console.log('queryCollection', data);
      data.forEach(async (outerDoc:any) => {
        const outerData = outerDoc.data();
        const outerId = outerDoc.id;
        // console.log('outerId', outerId);
        // console.log('outerData', outerData);
        this.currentEmployee.push(outerData)
  
      });
      // this.keysUser = object
      console.log('currentEmployee', this.currentEmployee);
    })
  }
}
