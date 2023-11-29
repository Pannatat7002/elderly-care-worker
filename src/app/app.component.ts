import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../app/service/auth-service/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elderly_care_worker';
  eventLoading:boolean = false

  datafirestore: any
  dataYear: any = []
  querySigleObject: any
  dataVitalSign: any = []
  constructor(
    private db: AngularFirestore,
    private router: Router,
    private AuthService:AuthService
  ) {}
  ngOnInit(): void {
    this.checkExpire()
    // this.getUserID()
  }

  Loading(event:boolean){
    this.eventLoading = event
  }

  async checkExpire(){
    if (await this.AuthService.checkActive() === null) {
      this.AuthService.SignOut()
      console.log('Main checkExpire null',);
      // this.router.navigate(['/signin-page'])
    } else {
      console.log('Main checkExpire pass',);
      
    }
  }
}
