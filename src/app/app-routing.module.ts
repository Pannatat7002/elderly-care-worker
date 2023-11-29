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
import { DashboardComponent } from './manager-page/container/dashboard/dashboard.component';
import { CreateUserComponent } from './manager-page/container/component/create-user/create-user.component';
import { MenuTopicComponent } from './manager-page/container/component/menu-topic/menu-topic.component';
import { EmployeeManagerComponent } from './manager-page/container/component/employee-manager/employee-manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin-page', pathMatch: 'full' },
  {
    path: 'signin-page', component: SigninPageComponent,
    data: { animation: 'AboutPage' }
  },
  {
    path: 'employee', component: LandingPageComponent,
    data: { animation: 'AboutPage' },
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
    data: { animation: 'HomePage' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/manager/menu'
      },
      { path: 'menu', component: MenuTopicComponent },
      { path: 'employee', component: EmployeeManagerComponent },
      { path: 'profile', component: EmployeeProfileComponent },
      { path: 'createuser', component: CreateUserComponent },
    ]
  },
  {
    path: 'manualConfig', component: ManualConfigPageComponent,
    data: { animation: 'AboutPage' }
  },
  {
    path: 'forgot-password', component: ForgotPageComponent,
    data: { animation: 'AboutPage' }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
