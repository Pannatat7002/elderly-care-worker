import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  @Output() timeOutLoading = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
        setTimeout(() => {    
      console.log('timeOutLoading',this.timeOutLoading);
      
      this.timeOutLoading.emit(true)
      // this.timeout = false;
    }, 2000);
  }

}
