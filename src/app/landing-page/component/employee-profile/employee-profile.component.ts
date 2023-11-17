import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent {
  @Output() onBackPath = new EventEmitter<string>();

  onBack() {
    // console.log('onBack');
    this.onBackPath.emit('work-schedule')
  }
}
