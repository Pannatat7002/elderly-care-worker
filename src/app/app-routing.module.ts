import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManualConfigPageComponent } from './manual-config-page/manual-config-page.component';
import { ForgotPageComponent } from './signin-page/component/forgot-page/forgot-page.component';
import { WorkScheduleComponent } from './landing-page/component/work-schedule/work-schedule.component';
import { EmployeeProfileComponent } from './landing-page/component/employee-profile/employee-profile.component';
import { HomePageComponent } from './landing-page/component/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin-page', pathMatch: 'full' },
  { path: 'signin-page', component: SigninPageComponent },
  {
    path: 'employee', component: LandingPageComponent,
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
  // {
  //   path: 'manager', component: ManagerPageComponent,
  //   children: [
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       redirectTo: '/landing/home'
  //     },
  //     { path: 'home', component: HomePageComponent },
  //     { path: 'works', component: WorkScheduleComponent },
  //     { path: 'profile', component: EmployeeProfileComponent },
  //   ]
  // },
  { path: 'manualConfig', component: ManualConfigPageComponent },
  { path: 'forgot-password', component: ForgotPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
