import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './landing-page/component/home-page/home-page.component';
import { TabInsightsComponent } from './landing-page/component/home-page/component/tab-insights/tab-insights.component';
@NgModule({
  declarations: [
    AppComponent,
    ForgotPageComponent,
    SigninPageComponent,
    SplashComponent,
    LoadingServiceComponent,
    LandingPageComponent,
    HomePageComponent,
    TabInsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
