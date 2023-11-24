import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './container/component/create-user/create-user.component';
// import { NavBarMgComponent } from './container/component/nav-bar-mg/nav-bar-mg.component';



@NgModule({
  declarations: [
    // NavBarMgComponent
  
    CreateUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerPageModule { }
