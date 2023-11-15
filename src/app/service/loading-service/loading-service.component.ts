import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading-service',
  templateUrl: './loading-service.component.html',
  styleUrls: ['./loading-service.component.scss']
})
export class LoadingServiceComponent implements OnInit {
  timeout:boolean = true
  @Output() timeOutLoading = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {    
      // console.log('timeOutLoading',this.timeOutLoading);
      
      this.timeOutLoading.emit(true)
      // this.timeout = false;
    }, 1500);
  }

}
