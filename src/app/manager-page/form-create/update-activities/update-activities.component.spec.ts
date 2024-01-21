import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivitiesComponent } from './update-activities.component';

describe('UpdateActivitiesComponent', () => {
  let component: UpdateActivitiesComponent;
  let fixture: ComponentFixture<UpdateActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateActivitiesComponent]
    });
    fixture = TestBed.createComponent(UpdateActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
