import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { AuthService } from '../../../../service/auth-service/auth.service'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
@Component({
  selector: 'app-forgot-page',
  templateUrl: './forgot-page.component.html',
  styleUrls: ['./forgot-page.component.scss']
})
export class ForgotPageComponent implements OnInit {
  timeOutLoading: boolean = false
  errorCode: any
  errorMessage: any

  @Output() closeforGet = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  loading(event: any) {
    // console.log('event', event);
    this.timeOutLoading = event
  }

  closeForGet() {
    // console.log('closeForGet');
    this.closeforGet.emit(false)
  }

  forget(velue: any) {
    const auth = getAuth();
    // console.log('forget auth', auth);
    // console.log('data', velue.email);
    if (velue.email) {
      sendPasswordResetEmail(auth, velue.email).then(() => {
        this.closeForGet()
      }).catch((error) => {
        this.errorCode = error.code;
        this.errorMessage = error.message;
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.closeForGet()
        }, 3000);

      });
    }
  }

  onClickSubmit(result: any) {
    console.log("You have email : " + result.email);
  }
}
