import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/signin-page', pathMatch: 'full' },  
  { path: 'signin-page', component: SigninPageComponent },

  // { path: 'signin-page', component: SigninPageComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
