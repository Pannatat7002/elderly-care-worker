import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getDocs, setDoc, doc, where, query, addDoc, updateDoc } from 'firebase/firestore';
import { firestore } from "../app/service/config/firebaseConfig";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tutorial: any;
  title = 'elderly_care_worker';
  datafirestore: any
  dataYear: any = []
  constructor(
    private db: AngularFirestore,
    private firestore: AngularFirestore
  ) {
    this.queryFireStore()
  }

  async queryFireStore() {
    const outerCollectionRef = collection(firestore, 'data');
    const outerQuerySnapshot = await getDocs(outerCollectionRef);
    outerQuerySnapshot.forEach(async (outerDoc) => {
      const outerData = outerDoc.data();
      const outerId = outerDoc.id;
      console.log('outerId', outerId);
      console.log('outerData', outerData);
      this.dataYear.push(JSON.stringify(outerData))
    });
  }

  create() {
    setDoc(doc(firestore, "data", "สมเทส_วีสอง"), {
      "2023": {
        "1": {
          vital_signs: {
            Medic: [
              {
                medicname: "ชุดยา A",
                amout: "6",
                unit: "เม็ด",
                status: "false",
                time: 'เช้า'

              },
              {
                medicname: "ชุดยา B",
                amout: "4",
                unit: "เม็ด",
                time: "กลางวัน",
                status: "false"
              },
              {
                medicname: "ชุดยา C",
                amout: "8",
                unit: "เม็ด",
                time: "เย็น",
                status: "false"
              },
              {
                medicname: "ชุดยา D",
                amout: "8",
                unit: "เม็ด",
                time: "กลางคืน",
                status: "false"
              }
            ]
          }
        }
      }

    });
  }

  async addDoc() {
    const docRef = await addDoc(collection(firestore, "data"), {
      "สมเทส_วีสาม": {
        "2023": {
          "1": {
            // vital_signs: {}
          }
        }
      }
    });
    console.log("Document written with ID: ", docRef.id);
  }

  async addDocData() {
    const outerCollectionRef = collection(firestore, 'data');
    const outerQuerySnapshot = await getDocs(outerCollectionRef);
    outerQuerySnapshot.forEach(async (outerDoc) => {
      // const outerData = outerDoc.data();
      const outerId = outerDoc.id;
      // this.dataYear.push(JSON.stringify(outerData))
      if(outerId === "ปัณณทัต_สมาน"){
        // console.log('outerId', outerId);
        // console.log('outerData', outerData);
        this.updateDataDoc(outerDoc)
      } else {
        console.log('outerId NO', outerDoc);

      }
    });
  }

  async updateDataDoc(data?:any,outerDoc?:any) {
    const outerData = outerDoc.data();
    const outerId = outerDoc.id;
    const washingtonRef = doc(firestore, "data", outerId);
    await updateDoc(washingtonRef, {
      outerData
    });
  }

  deleteDoc() {
    const tutRef = this.db.doc('content');
    tutRef.delete();

  }
  updateDoc() {
    // const tutRef = this.db.doc('content');
    // tutRef.set({ title: 'zkoder Tutorial'});
    const correctDocRef = this.firestore.collection('data').doc('userId');
    console.log('correctDocRef', correctDocRef);


  }

}
