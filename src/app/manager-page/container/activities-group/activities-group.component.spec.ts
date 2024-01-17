import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesGroupComponent } from './activities-group.component';

describe('ActivitiesGroupComponent', () => {
  let component: ActivitiesGroupComponent;
  let fixture: ComponentFixture<ActivitiesGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesGroupComponent]
    });
    fixture = TestBed.createComponent(ActivitiesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
