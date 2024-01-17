import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManualConfigPageComponent } from './manual-config-page/manual-config-page.component';
import { ForgotPageComponent } from './signin-page/component/forgot-page/forgot-page.component';
import { WorkScheduleComponent } from './landing-page/component/work-schedule/work-schedule.component';
import { EmployeeProfileComponent } from './landing-page/component/employee-profile/employee-profile.component';
import { HomePageComponent } from './landing-page/component/home-page/home-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
// import { DashboardComponent } from './manager-page/container/dashboard/dashboard.component';
// import { CreateUserComponent } from './manager-page/container/component/create-user/create-user.component';
// import { MenuTopicComponent } from './manager-page/container/component/menu-topic/menu-topic.component';
import { EmployeeManagerComponent } from './manager-page/components/employee-manager/employee-manager.component';
import { CreateUserComponent } from './manager-page/form-create/create-user/create-user.component';
import { UpdateUserComponent } from './manager-page/form-create/update-user/update-user.component';
import { ResidentsManagerComponent } from './manager-page/components/residents-manager/residents-manager.component';
import { CreateResidentsComponent } from './manager-page/form-create/create-residents/create-residents.component';
import { UpdateResidentsComponent } from './manager-page/form-create/update-residents/update-residents.component';
import { MenuTopicComponent } from './manager-page/container/menu-topic/menu-topic.component';
import { IndividualGroupComponent } from './manager-page/container/individual-group/individual-group.component';
import { ActivitiesGroupComponent } from './manager-page/container/activities-group/activities-group.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin-page', pathMatch: 'full' },
  {
    path: 'signin-page', component: SigninPageComponent,
    data: { animation: 'Signin-page' }
  },
  {
    path: 'employee', component: LandingPageComponent,
    data: { animation: 'Landing-page' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/employee/landing'
      },
      { path: 'landing', component: HomePageComponent },
      { path: 'works', component: WorkScheduleComponent },
      { path: 'profile', component: EmployeeProfileComponent },
    ]
  },
  {
    path: 'manager', component: ManagerPageComponent,
    data: { animation: 'Landing-page' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/manager/menu'
      },
      { path: 'menu', component: MenuTopicComponent },
      { path: 'employee', component: EmployeeManagerComponent },
      { path: 'residents', component: ResidentsManagerComponent },
      { path: 'profile', component: EmployeeProfileComponent },
      { path: 'form-Create', component: CreateUserComponent,data: { animation: 'Signin-page' } },
      { path: 'form-Update', component: UpdateUserComponent,data: { animation: 'Signin-page' } },
      { path: 'Residents-Create', component: CreateResidentsComponent,data: { animation: 'Signin-page' } },
      { path: 'Residents-Update', component: UpdateResidentsComponent,data: { animation: 'Signin-page' } },
      { path: 'Activities-Group', component: ActivitiesGroupComponent,data: { animation: 'Signin-page' } },
      { path: 'Individual-Group', component: IndividualGroupComponent,data: { animation: 'Signin-page' } },
    ]
  },
  {
    path: 'manualConfig', component: ManualConfigPageComponent,
    data: { animation: 'Landing-page' }
  },
  {
    path: 'forgot-password', component: ForgotPageComponent,
    data: { animation: 'Landing-page' }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
