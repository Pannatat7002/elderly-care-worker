import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/service/auth-service/auth.service'
import { Router} from '@angular/router';
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
    this.checkNavigate()
  }
  onClickSubmit(result: any) {
    this.signin(result.email, result.password)
    // this.SignUp(result.email, result.password)
  }

  signin(email: any, password: any) {
    this.AuthService.SignIn(email, password).then(async (res: any) => {
      this.AuthService.checkActive()
      const userProfile: any = res.user
      const accessToken: any = userProfile.accessToken
      const DataProfile: any = await getDocs(collection(firestore, "Users")); //get data getDataProfile
      let roleUser: any = []
      DataProfile.forEach((doc: any) => {
        const dataUser = JSON.parse(JSON.stringify(doc.data()));
        if (userProfile.email.toUpperCase() === dataUser.email.toUpperCase()) {
          roleUser = {
            role: dataUser.role,
            email: dataUser.email
          }
        }
      });

      console.log(roleUser.role.toUpperCase());
      switch (roleUser.role.toUpperCase()) {
        case "EMPLOYEE":
          this.cookieService.setCookie('accessToken', accessToken)
          this.router.navigate(['/employee'])
          break;
        case "MANAGER":
          this.cookieService.setCookie('accessToken', accessToken)
          this.router.navigate(['/manager'])
          break;
        case "ADMIN":
          this.cookieService.setCookie('accessToken', accessToken)
          this.router.navigate(['/landing'])
          break;
        default:
          this.alertError = JSON.stringify("ท่านไม่มีสิทธิเข้าใช้งาน กรุณาติดต่อ 095-805-7052")
          break;
      }
    }).catch((err) => {
      this.alertError = JSON.stringify(err.code)
    })
  }
  SignUp(email: any, password: any) {
    this.AuthService.SignUp(email, password).then(async (res: any) => {
      console.log('SignUp', res);

    }).catch((err) => {
      if (err == "auth/email-already-in-use") {
        this.alertError = 'อีเมลถูกใช้งานแล้ว หรือ ติดต่อ 095-805-7052'
      } else {
        this.alertError = JSON.stringify(err.code)
      }
    })
  }

  async checkNavigate() {
    if (await this.AuthService.checkActive()) {
      console.log('1');
      const data = await this.AuthService.checkActive()
      const DataProfile: any = await getDocs(collection(firestore, "Users")); //get data getDataProfile
      let roleUser: any = []
      DataProfile.forEach((doc: any) => {
        const dataUser = JSON.parse(JSON.stringify(doc.data()));
        if (data.email.toUpperCase() === dataUser.email.toUpperCase()) {
          roleUser = dataUser.role
        }
      });

      console.log(roleUser.toUpperCase());
      switch (roleUser.toUpperCase()) {
        case "EMPLOYEE":
          this.router.navigate(['/employee'])
          break;
        case "MANAGER":
          this.router.navigate(['/manager'])
          break;
        case "ADMIN":
          this.router.navigate(['/landing'])
          break;
        default:
          this.alertError = JSON.stringify("ท่านไม่มีสิทธิเข้าใช้งาน กรุณาติดต่อ 095-805-7052")
          break;

      }
    } else {
      console.log('2');
    }
    // })
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
