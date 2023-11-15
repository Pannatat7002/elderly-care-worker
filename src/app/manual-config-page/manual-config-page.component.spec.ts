import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualConfigPageComponent } from './manual-config-page.component';

describe('ManualConfigPageComponent', () => {
  let component: ManualConfigPageComponent;
  let fixture: ComponentFixture<ManualConfigPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualConfigPageComponent]
    });
    fixture = TestBed.createComponent(ManualConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
