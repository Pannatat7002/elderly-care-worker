import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/service/auth-service/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkDatabaseService } from '../../app/service/work-service/work-database.service';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../app/service/config/firebaseConfig"
// import { CookieService } from 'ngx-cookie-service';
import { CookieService } from '../../app/service/cookie-service/cookie.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {
  alertError: any
  userProfile: any
  timeOutLoading: boolean = false
  forgot: boolean = false;
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private workDataService: WorkDatabaseService,
  ) { }

  async ngOnInit() {
     const Token = await this.cookieService.getCookie('accessToken')
    if(!!Token){
      this.router.navigate(['/landing'])
    }
  }
  onClickSubmit(result: any) {
    this.signin(result.email, result.password)
  }

   signin(email: any, password: any) {
    this.AuthService.SignIn(email, password).then(async (res: any) => {
      const accessToken: any = res.user._delegate.accessToken
      const userToken: any = this.AuthService.jwt_decode(accessToken)
        const DataProfile: any = await getDocs(collection(firestore, "Users")); //get data getDataProfile
        DataProfile.forEach((doc: any) => {
          const dataUser = JSON.parse(JSON.stringify(doc.data()));
          const roleUser = dataUser.role
          if(roleUser.toUpperCase() === "EMPLOYEE"||roleUser.toUpperCase() === "ADMIN"){
            if (email === dataUser.email) {
              this.cookieService.setCookie('accessToken', accessToken)
              this.router.navigate(['/landing'])
            } else {
              this.alertError = JSON.stringify("ไม่พบข้อมูลในระบบ")
            }
          } else {
            this.alertError = JSON.stringify("ท่านไม่มีสิทธิเข้าใช้งาน กรุณาติดต่อ 095-805-7052")
          }
        });
    }).catch((err) => {
      this.alertError = JSON.stringify(err.code)
    })
  }

  loading(event: any) {
    console.log('event', event);
    this.timeOutLoading = event
  }

  submit() {
    console.log('1');

  }

  closeforGet(evet: boolean) {
    this.forgot = evet
  }
}
