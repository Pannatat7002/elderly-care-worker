import { Component, Input } from '@angular/core';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../service/config/firebaseConfig";
import { CookieService } from '../../../service/cookie-service/cookie.service';
import { AuthService } from '../../../service/auth-service/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  employeeName: any
  pincode: any
  @Input() userEmail: string = 'pannatat@gmail.com'; // decorate the property with @Input()
  @Input() basepath: string = ''; // decorate the property with @Input()

  constructor(
    private cookieService: CookieService,
    private AuthService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.querySigle()
  }

  async querySigle() {
    const data = query(collection(firestore, 'Users'), where("email", "==", this.userEmail));
    console.log('Sigle data', data);
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      const userProfile = doc.data()
      this.employeeName = userProfile['name'] || ""
      this.pincode = userProfile['pincode'] || ""
    });
    // this.queryMainTopic()
  }

  SignOut() {
    this.cookieService.clearAllCookies()
    // this.cookieService.deleteAll('accessToken')
    this.AuthService.SignOut()
  }

  basePaths() {
    setTimeout(() => {
      console.log('this.basepath +profile', this.basepath + 'profile');
      // <<<---using ()=> syntax
      // this.pathName = location.pathname.replace('menu', '')
      // console.log('pathName', this.pathName);
      this.router.navigate([this.basepath + 'profile'])
    }, 1000);
  }
}
