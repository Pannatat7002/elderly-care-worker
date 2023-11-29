import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { AuthService } from '../app/service/auth-service/auth.service'
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
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
    private AuthService:AuthService,
    private contexts: ChildrenOutletContexts
  ) {}
  ngOnInit(): void {
    // this.checkExpire()
    // this.getUserID()
  }

  Loading(event:boolean){
    this.eventLoading = event
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
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
