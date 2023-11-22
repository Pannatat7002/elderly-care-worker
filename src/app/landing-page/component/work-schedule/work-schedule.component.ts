import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.scss']
})

export class WorkScheduleComponent implements OnInit {
  workList: any = []
  _topicHeader:string = 'ตารางงาน'

  constructor() { }

  ngOnInit(): void {
    this.craeteWorkList()
  }

  craeteWorkList() {
    this.workList = [
      {
        workName: "จัดน้ำหัวเตียง",
        elderName: "นาย วิชัย ไก่ย่าง",
        workTime: "7.00 น.",
        status: false
      },
      {
        workName: "จัดน้ำหัวเตียง",
        elderName: "นาย วิเชียน ไก่ย่าง",
        workTime: "7.00 น.",
        status: false
      },
      {
        workName: "จัดน้ำหัวเตียง",
        elderName: "นาย อุดร ไก่ย่าง",
        workTime: "7.00 น.",
        status: false
      },
      {
        workName: "จัดน้ำหัวเตียง",
        elderName: "นาย อบโอ่ง ไก่ย่าง",
        workTime: "7.00 น.",
        status: false
      },
      {
        workName: "ตรวจสอบความเรียบร้อย",
        elderName: "นาย วิชัย ไก่ย่าง",
        workTime: "8.00 น.",
        status: false
      },
      {
        workName: "ตรวจสอบความเรียบร้อย",
        elderName: "นาย วิเชียน ไก่ย่าง",
        workTime: "8.00 น.",
        status: false
      },
      {
        workName: "ตรวจสอบความเรียบร้อย",
        elderName: "นาย อุดร ไก่ย่าง",
        workTime: "8.00 น.",
        status: false
      },
      {
        workName: "ตรวจสอบความเรียบร้อย",
        elderName: "นาย อบโอ่ง ไก่ย่าง",
        workTime: "8.00 น.",
        status: true
      },
      {
        workName: "จ่ายยา",
        elderName: "นาย วิชัย ไก่ย่าง",
        workTime: "11.30 น.",
        status: true
      },
      {
        workName: "จ่ายยา",
        elderName: "นาย วิเชียน ไก่ย่าง",
        workTime: "11.30 น.",
        status: true
      },
      {
        workName: "จ่ายยา",
        elderName: "นาย อุดร ไก่ย่าง",
        workTime: "11.30 น.",
        status: false
      },
      {
        workName: "จ่ายยา",
        elderName: "นาย อบโอ่ง ไก่ย่าง",
        workTime: "11.30 น.",
        status: true
      },
    ]
  }
}
