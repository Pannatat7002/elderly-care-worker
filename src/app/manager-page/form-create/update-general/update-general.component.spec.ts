import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGeneralComponent } from './update-general.component';

describe('UpdateGeneralComponent', () => {
  let component: UpdateGeneralComponent;
  let fixture: ComponentFixture<UpdateGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateGeneralComponent]
    });
    fixture = TestBed.createComponent(UpdateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
