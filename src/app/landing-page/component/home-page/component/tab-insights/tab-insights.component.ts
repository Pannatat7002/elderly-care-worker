import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-tab-insights',
  templateUrl: './tab-insights.component.html',
  styleUrls: ['./tab-insights.component.scss']
})
export class TabInsightsComponent implements OnInit {
  @Output() outPaths = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onNextPaths(path:string){
    // this.router.navigate([''])
    this.outPaths.emit(path)
  }
}
