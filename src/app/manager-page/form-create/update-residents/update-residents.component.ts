import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { collection, getDocs, getDoc, setDoc, doc, where, query, addDoc, updateDoc, deleteDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from "../../../../app/service/config/firebaseConfig";
import { Location } from '@angular/common'
@Component({
  selector: 'app-update-residents',
  templateUrl: './update-residents.component.html',
  styleUrls: ['./update-residents.component.scss']
})
export class UpdateResidentsComponent {
  _topicHeader: string = 'แก้ไขข้อมูลผู้พักอาศัย'
  alertError: any
  userData:any = []
  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let employeeId = params['ID'];
      console.log('employeeId', employeeId);
      this.querySigle(employeeId)
    });

  }

  submitFormCreate(result: any) {
    console.log('submitFormCreate',result);
    
    if (!!result.pass1 && !!result.pass2 &&result.pass1 !== result.pass2) {
      this.alertError = JSON.stringify("กรุณากรอกรหัสผ่านให้ถูกต้อง")
    } else {
      this.updateUser(result)
    }
  }

  async updateUser(result: any) {
    Object.values(result).forEach((res:any,index)=>{
      if(res !== ""){
        console.log('result[index]',Object.keys(result)[index]);
        console.log('index',index);
        
        this.userData[Object.keys(result)[index]] = res
        console.log('this.userData',this.userData);
      }
    })
    await setDoc(doc(firestore, "Residents", this.userData.employeeId), this.userData);
    this.location.back()
  }

  async querySigle(employeeId: any) {
    const data = query(collection(firestore, 'Residents'), where("employeeId", "==", employeeId));
    console.log('Sigle data', data);
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      console.log('doc', doc);

      console.log(doc.id, " => ",doc.data());
      this.userData = doc.data()
      // this.querySigleObject = JSON.stringify(doc.data())
    });
  }
}
