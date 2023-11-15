import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInsightsComponent } from './tab-insights.component';

describe('TabInsightsComponent', () => {
  let component: TabInsightsComponent;
  let fixture: ComponentFixture<TabInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
