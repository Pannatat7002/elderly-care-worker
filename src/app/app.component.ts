import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elderly_care_worker';
  eventLoading:boolean = false

  datafirestore: any
  dataYear: any = []
  querySigleObject: any
  dataVitalSign: any = []
  constructor(
    private db: AngularFirestore,
  ) {}

  Loading(event:boolean){
    this.eventLoading = event
  }
}
