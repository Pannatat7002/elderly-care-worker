import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResidentsComponent } from './update-residents.component';

describe('UpdateResidentsComponent', () => {
  let component: UpdateResidentsComponent;
  let fixture: ComponentFixture<UpdateResidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateResidentsComponent]
    });
    fixture = TestBed.createComponent(UpdateResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
