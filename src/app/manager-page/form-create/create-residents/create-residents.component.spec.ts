import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResidentsComponent } from './create-residents.component';

describe('CreateResidentsComponent', () => {
  let component: CreateResidentsComponent;
  let fixture: ComponentFixture<CreateResidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateResidentsComponent]
    });
    fixture = TestBed.createComponent(CreateResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
