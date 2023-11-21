import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-back-navbar',
  templateUrl: './back-navbar.component.html',
  styleUrls: ['./back-navbar.component.scss']
})
export class BackNavbarComponent {
  @Output() outPaths = new EventEmitter<string>();

}
