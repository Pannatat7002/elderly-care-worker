import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeneralComponent } from './create-general.component';

describe('CreateGeneralComponent', () => {
  let component: CreateGeneralComponent;
  let fixture: ComponentFixture<CreateGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGeneralComponent]
    });
    fixture = TestBed.createComponent(CreateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
