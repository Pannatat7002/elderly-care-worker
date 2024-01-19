import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGroupComponent } from './general-group.component';

describe('GeneralGroupComponent', () => {
  let component: GeneralGroupComponent;
  let fixture: ComponentFixture<GeneralGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralGroupComponent]
    });
    fixture = TestBed.createComponent(GeneralGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
