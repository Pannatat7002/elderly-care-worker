import { Component } from '@angular/core';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../app/service/config/firebaseConfig"

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.scss']
})
export class ManagerPageComponent {
  timeout: boolean = true;
  timeOutLoading: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.getUserID()
  }
  async getUserID(){
    const DataProfile: any = await getDocs(collection(firestore, "Users")); //get data getDataProfile
    DataProfile.forEach((doc: any) => {
      // const dataUser = JSON.parse(JSON.stringify(doc.data()));
      // console.log('getUserID',doc.id, ' => ', doc.data());

    })
  }

  loading(event: any) {
    console.log('loading',event);
    
    this.timeOutLoading = event
  }
}
