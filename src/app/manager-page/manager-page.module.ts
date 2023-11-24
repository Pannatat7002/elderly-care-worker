import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagerComponent } from './container/component/employee-manager/employee-manager.component';
// import { CreateUserComponent } from './container/component/create-user/create-user.component';
// import { MenuTopicComponent } from './container/component/menu-topic/menu-topic.component';
// import { NavBarMgComponent } from './container/component/nav-bar-mg/nav-bar-mg.component';



@NgModule({
  declarations: [
    // NavBarMgComponent
  
    // CreateUserComponent,
    // MenuTopicComponent
  
    EmployeeManagerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerPageModule { }
