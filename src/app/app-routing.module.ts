import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManualConfigPageComponent } from './manual-config-page/manual-config-page.component';
import { ForgotPageComponent } from './signin-page/component/forgot-page/forgot-page.component';
import { WorkScheduleComponent } from './landing-page/component/work-schedule/work-schedule.component';

const routes: Routes = [
  { path: '',   redirectTo: '/signin-page', pathMatch: 'full' },  
  { path: 'signin-page', component: SigninPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'manualConfig', component: ManualConfigPageComponent },
  { path: 'forgot-password', component: ForgotPageComponent },
  { path: 'work-Schedule', component: WorkScheduleComponent },

  // { path: 'signin-page', component: SigninPageComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
