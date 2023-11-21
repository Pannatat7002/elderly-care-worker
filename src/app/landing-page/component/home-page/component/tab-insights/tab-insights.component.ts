import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-insights',
  templateUrl: './tab-insights.component.html',
  styleUrls: ['./tab-insights.component.scss']
})
export class TabInsightsComponent implements OnInit {
  @Output() outPaths = new EventEmitter<string>();

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  onNextPaths(path:string){
    this.router.navigate(['/work-Schedule'])
    // this.outPaths.emit(path)
  }
}
