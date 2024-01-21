import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivitiesComponent } from './create-activities.component';

describe('CreateActivitiesComponent', () => {
  let component: CreateActivitiesComponent;
  let fixture: ComponentFixture<CreateActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateActivitiesComponent]
    });
    fixture = TestBed.createComponent(CreateActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
