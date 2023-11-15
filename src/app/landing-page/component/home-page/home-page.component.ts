import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../service/auth-service/auth.service'
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../service/config/firebaseConfig";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Output() outPaths = new EventEmitter<string>();
  @Input() userProfile: any = '-'
  nameHeader:any
  pincode:any
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private AuthService: AuthService,
    
    ) { }
    
    ngOnInit(): void {
    const Token = this.cookieService.get('accessToken')
    if (!Token || Token === undefined) {
      this.router.navigate([''])
    }
    this.querySigle()
  }

  onNextPaths(path:string){
    // this.router.navigate([''])
    this.outPaths.emit(path)
  }

  SignOut() {
    this.cookieService.delete('accessToken')
    this.cookieService.deleteAll('accessToken')
    this.AuthService.SignOut().then(() => {
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.router.navigate([''])
      }, 1000);
    })
  }

  async querySigle() {
    const data = query(collection(firestore, 'Users'), where("email", "==", "pannatat@gmail.com"));
    console.log('Sigle data', data);
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      const userProfile = doc.data()
      this.nameHeader = userProfile['name'] || ""
      this.pincode = userProfile['pincode'] || ""
    });
  }
}
