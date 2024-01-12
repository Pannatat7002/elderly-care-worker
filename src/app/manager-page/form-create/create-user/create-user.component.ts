import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  _topicHeader:string = 'เพิ่มรายชื่อพนักงาน'
  constructor(
    private router: Router,

  ){

  }

  // goToCreateUSer(){
  //   this.router.navigate(['/manager/form-user'])
  // }
}
