import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkDatabaseService } from '../service/work-service/work-database.service';
import { CookieService } from '../service/cookie-service/cookie.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  // selectMode:string = "status"
  selectMode: string = "work-schedule"
  // selectMode:string = "schedules"
  userProfile: any
  timeout: boolean = true;
  timeOutLoading: boolean = false;

  //time
  currentYear:any
  currentMonth:any
  currentDay:any
  defaultDateTime:any
  pathName:any
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private workDataService: WorkDatabaseService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    // this.checkExpire()
    this.getPosition()
    this.queryTimeNumber()
      this.userProfile = this.cookieService.getCookie('userProfile')
      this.getUserProfile(this.userProfile.ender)
  }

  loading(event: any) {
    console.log('loading',event);
    
    this.timeOutLoading = event
  }

  // SignOut() {
  //   this.AuthService.SignOut().then(() => {
  //     this.router.navigate([''])
  //   })
  // }


  getUserProfile(user: string) {
    this.workDataService.getHistory(user).then((res) => {
      this.userProfile = res.user[0]
      this.timeout = false
    }).catch((err) => {
      this.timeout = false
    })
  }
  onNextPaths(paths: string) {
    this.selectMode = paths
  }

  getPosition() {
    console.log('lat');

    navigator.geolocation.getCurrentPosition(resp => {
      console.log('lng', resp.coords.longitude);
      console.log('lat', resp.coords.latitude);
    },
      err => {
      });
  }

  queryTimeNumber() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth()+1;
    this.currentDay = new Date().getDate();
    this.defaultDateTime = {
      day:this.currentDay,
      month:this.currentMonth,
      year:this.currentYear
    }
    // alert(JSON.stringify(this.defaultDateTime));
  }

  async checkExpire(){
    this.pathName = location.pathname.replace('landing','')
    if (await this.AuthService.checkActive() === null) {
      this.router.navigate(['/signin-page'])
    } else{
      
    }
  }
}
