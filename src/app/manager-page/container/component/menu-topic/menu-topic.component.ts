import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WorkDatabaseService } from 'src/app/service/work-service/work-database.service';
import { AuthService } from '../../../../../app/service/auth-service/auth.service'

@Component({
  selector: 'app-menu-topic',
  templateUrl: './menu-topic.component.html',
  styleUrls: ['./menu-topic.component.scss']
})
export class MenuTopicComponent {
  nameTopic:any = [];
  nameSubTopic:any = [];
  selectTopic:any ='';
  base64:any  = 'data:image/png;base64,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'
  pathName: any

constructor(
  private router: Router,
  private WorkService:WorkDatabaseService,
  private sanitizer: DomSanitizer,
  private AuthService: AuthService,

){}

  ngOnInit(): void {
    this.pathName = location.pathname.replace('menu','')
    // this.AuthService.checkActive()
    // this.checkExpire()
    this.querymenuTopic()
    // this.querymenuSubTopic()
  }
  byPass(base64:string) {
    // base64 = 
    return this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,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');
    // return this.sanitizer.bypassSecurityTrustUrl(base64);
  }

  querymenuTopic(){
    this.WorkService.queryTopicWorks('manager','mainTopicWorks').then((item:any)=>{
      console.log('item',item.data);
      Object.keys(item.data).forEach((topicname:any)=>{
        console.log('topicname',topicname);
        
        if(item.data[topicname]){
          this.nameTopic = Object.keys(item.data)
        }
      })
      
    })
  }

  selectTopicMenu(topic:any){
    console.log('topic',topic);
    if(topic == "รายชื่อพนักงาน"){
      this.router.navigate(['/manager/employee'])
    } else {
      // this.router.navigate(['/employee/landing/works'])
    }
  }

  // async checkExpire(){
  //   this.pathName = location.pathname.replace('menu','')
  //   if (await this.AuthService.checkActive() === null) {
  //     this.AuthService.SignOut()    
  //   } else {
  //     console.log('checkExpire M',);
      
  //   }
  // }
}
