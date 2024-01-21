import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { config } from '../../src/app/service/config/firebaseConfig'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ForgotPageComponent } from './signin-page/component/forgot-page/forgot-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SplashComponent } from './service/splash-service/splash/splash.component';
import { LoadingServiceComponent } from './service/loading-service/loading-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './landing-page/component/home-page/home-page.component';
import { TabInsightsComponent } from './landing-page/component/home-page/component/tab-insights/tab-insights.component';
import { ManualConfigPageComponent } from './manual-config-page/manual-config-page.component';
import { WorkScheduleComponent } from './landing-page/component/work-schedule/work-schedule.component';
import { EmployeeProfileComponent } from './landing-page/component/employee-profile/employee-profile.component';
import { WorkDatabaseService } from './service/work-service/work-database.service';
import { NavBarComponent } from './landing-page/component/nav-bar/nav-bar.component';
import { BackNavbarComponent } from './landing-page/component/back-navbar/back-navbar.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
// import { DashboardComponent } from './manager-page/container/dashboard/dashboard.component';
// import { MenuTopicComponent } from './manager-page/container/component/menu-topic/menu-topic.component';
import { EmployeeManagerComponent } from './manager-page/components/employee-manager/employee-manager.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NavBarMgComponent } from './manager-page/container/component/nav-bar-mg/nav-bar-mg.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateUserComponent } from './manager-page/form-create/create-user/create-user.component';
import { UpdateUserComponent } from './manager-page/form-create/update-user/update-user.component';
import { CreateResidentsComponent } from './manager-page/form-create/create-residents/create-residents.component';
import { UpdateResidentsComponent } from './manager-page/form-create/update-residents/update-residents.component';
import { ResidentsManagerComponent } from './manager-page/components/residents-manager/residents-manager.component';
import { ActivitiesGroupComponent } from './manager-page/container/activities-group/activities-group.component';
import { IndividualGroupComponent } from './manager-page/container/individual-group/individual-group.component';
import { MenuTopicComponent } from './manager-page/container/menu-topic/menu-topic.component';
import { GeneralGroupComponent } from './manager-page/container/general-group/general-group.component';
import { ManagerPageModule } from './manager-page/manager-page.module';
import { CkeckWorkerGroupComponent } from './manager-page/container/ckeck-worker-group/ckeck-worker-group.component';
import { CreateActivitiesComponent } from './manager-page/form-create/create-activities/create-activities.component';
import { UpdateActivitiesComponent } from './manager-page/form-create/update-activities/update-activities.component';

export function loadCrucialData() {
  return function () {
    // or use UserService
    WorkDatabaseService
    return delay(3000);
  }
}

export function delay(delay: number) {
  return function () {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ForgotPageComponent,
    SigninPageComponent,
    SplashComponent,
    LoadingServiceComponent,
    LandingPageComponent,
    HomePageComponent,
    TabInsightsComponent,
    ManualConfigPageComponent,
    WorkScheduleComponent,
    EmployeeProfileComponent,
    NavBarComponent,
    BackNavbarComponent,
    ManagerPageComponent,
    CreateUserComponent,
    MenuTopicComponent,
    EmployeeManagerComponent,
    UpdateUserComponent,
    CreateResidentsComponent,
    UpdateResidentsComponent,
    ResidentsManagerComponent,
    ActivitiesGroupComponent,
    IndividualGroupComponent,
    GeneralGroupComponent,
    CkeckWorkerGroupComponent,
    CreateActivitiesComponent,
    UpdateActivitiesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    ManagerPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),



  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: loadCrucialData()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
