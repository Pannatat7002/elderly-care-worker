import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-back-navbar',
  templateUrl: './back-navbar.component.html',
  styleUrls: ['./back-navbar.component.scss']
})
export class BackNavbarComponent {
  @Output() outPaths = new EventEmitter<string>();
  @Input() topicHeader: any = 'งานประจำวัน'; // decorate the property with @Input()

  constructor(private location: Location) {}

  back(): void {
    console.log('back');
    
    this.location.back()
  }
}
