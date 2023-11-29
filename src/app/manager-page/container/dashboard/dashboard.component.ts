import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  pathName: any

  constructor() { }

  ngOnInit(): void {
    this.pathName = location.pathname.replace('menu','')
    console.log('pathName', this.pathName);
  }
}
