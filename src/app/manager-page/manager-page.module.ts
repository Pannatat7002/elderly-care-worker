import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateResidentsComponent } from './form-create/create-residents/create-residents.component';
import { UpdateResidentsComponent } from './form-create/update-residents/update-residents.component';
import { ResidentsManagerComponent } from './container/component/residents-manager/residents-manager.component';
import { ActivitiesGroupComponent } from './container/activities-group/activities-group.component';
import { IndividualGroupComponent } from './container/individual-group/individual-group.component';
// import { EmployeeManagerComponent } from './container/component/employee-manager/employee-manager.component';
// import { CreateUserComponent } from './form-create/create-user/create-user.component';
// import { CreateUserComponent } from './container/component/create-user/create-user.component';
// import { MenuTopicComponent } from './container/component/menu-topic/menu-topic.component';
// import { NavBarMgComponent } from './container/component/nav-bar-mg/nav-bar-mg.component';



@NgModule({
  declarations: [
  
    ActivitiesGroupComponent,
       IndividualGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerPageModule { }
