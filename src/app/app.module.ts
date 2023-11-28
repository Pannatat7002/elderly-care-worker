import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {config} from '../../src/app/service/config/firebaseConfig'
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
import { DashboardComponent } from './manager-page/container/dashboard/dashboard.component';
import { MenuTopicComponent } from './manager-page/container/component/menu-topic/menu-topic.component';
import { CreateUserComponent } from './manager-page/container/component/create-user/create-user.component';
import { EmployeeManagerComponent } from './manager-page/container/component/employee-manager/employee-manager.component';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { NavBarMgComponent } from './manager-page/container/component/nav-bar-mg/nav-bar-mg.component';
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
    DashboardComponent,
    CreateUserComponent,
    MenuTopicComponent,
    EmployeeManagerComponent
    // NavBarMgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    


  ],
  providers: [WorkDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
