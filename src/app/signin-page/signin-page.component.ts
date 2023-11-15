import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/service/auth-service/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkDatabaseService } from '../../app/service/work-service/work-database.service';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../app/service/config/firebaseConfig"
import { CookieService } from 'ngx-cookie-service';
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
    const Token = await this.cookieService.get('accessToken')
    // if (Token) {
    //   console.log("Token", Token);
    //   this.router.navigate(['/landing'])
    // }
  }
  onClickSubmit(result: any) {
    console.log("You have email : " + result.email);
    console.log("You have password : " + result.password);
    this.signin(result.email, result.password)
  }

  signin(email: any, password: any) {
    this.AuthService.SignIn(email, password).then((res: any) => {
      const accessToken: any = res.user._delegate.accessToken
      const userToken: any = this.AuthService.jwt_decode(accessToken)
      this.workDataService.getUserProfile(userToken.email).then(async (res) => {
        const DataProfile: any = await getDocs(collection(firestore, "Users")); //get data getDataProfile
        DataProfile.forEach((doc: any) => {
          const dataUser = JSON.parse(JSON.stringify(doc.data()));
          if (res.user[0].email === dataUser.email) {
            this.cookieService.set('accessToken', accessToken)
            this.cookieService.set('userProfile', JSON.stringify(res.user[0]))
            this.router.navigate(['/landing'])
          } else {
            this.alertError = JSON.stringify("ไม่พบข้อมูลในระบบ")
          }
        });
      }).catch((err) => {
        this.alertError = JSON.stringify("อีเมลไม่ถูกต้อง")

      })
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

  // forget() {
  //   const auth = getAuth();
  //   console.log('forget auth',auth);

  //   sendPasswordResetEmail(auth,'pannatat7002@gmail.com')
  //     .then(() => {
  //       // Password reset email sent!
  //       // ..
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // }

  closeforGet(evet: boolean) {
    this.forgot = evet
  }
}
