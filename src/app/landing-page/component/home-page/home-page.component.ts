import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../../service/cookie-service/cookie.service';
import { AuthService } from '../../../service/auth-service/auth.service'
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../service/config/firebaseConfig";
import { WorkDatabaseService } from "../../../service/work-service/work-database.service";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Output() outPaths = new EventEmitter<string>();
  // @Input() userProfile: any = '-'
  employeeName:any
  pincode:any
  pathName:any
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private AuthService: AuthService,
    private WorkService:WorkDatabaseService
    ) { }
    
    ngOnInit(): void {
      this.checkExpire()
    // const Token = this.cookieService.getCookie('accessToken')
    // if (!Token || Token === undefined) {
    //   this.router.navigate([''])
    // }
    // this.pathName = location.pathname.replace('landing','')
    // console.log('pathName', this.pathName);
    // this.querySigle()
  }

  onNextPaths(path:string){
    // this.router.navigate([''])
    this.outPaths.emit(path)
  }

  async checkExpire(){
    this.pathName = location.pathname.replace('landing','')
    if (await this.AuthService.checkActive() === null) {
      this.AuthService.SignOut()    
    } else{
      
    }
  }

  // SignOut() {
  //   this.cookieService.delete('accessToken')
  //   this.cookieService.deleteAll('accessToken')
  //   this.AuthService.SignOut().then(() => {
  //     setTimeout(() => {                           // <<<---using ()=> syntax
  //       this.router.navigate([''])
  //     }, 1000);
  //   })
  // }

  // async querySigle() {
  //   const data = query(collection(firestore, 'Users'), where("email", "==", "pannatat@gmail.com"));
  //   console.log('Sigle data', data);
  //   const querySnapshot = await getDocs(data);
  //   querySnapshot.forEach((doc) => {
  //     const userProfile = doc.data()
  //     this.employeeName = userProfile['name'] || ""
  //     this.pincode = userProfile['pincode'] || ""
  //   });
  //   this.queryMainTopic()
  // }

  async queryMainTopic(){
    this.WorkService.queryTopicWorks('manager','mainTopicWorks').then((res:any)=>{
      console.log('res',res);
      Object.keys(res.data).forEach((key:any)=>{
        console.log('key',key);
        this.querySubTopicWorks(key) 
        
      })
    })
  }
  // async queryMainTopic(){
  //   this.WorkService.queryTopicWorks('dailywork',this.employeeName).then((res:any)=>{
  //     console.log('res',res);
      
  //   })
  // }
  async querySubTopicWorks(mainkey:string){
    this.WorkService.queryTopicWorks('manager','subTopicWork').then((res:any)=>{
      console.log('res',res);
      
    })
  }
}
