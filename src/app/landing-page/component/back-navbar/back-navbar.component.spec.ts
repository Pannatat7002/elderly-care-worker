import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavbarComponent } from './back-navbar.component';

describe('BackNavbarComponent', () => {
  let component: BackNavbarComponent;
  let fixture: ComponentFixture<BackNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackNavbarComponent]
    });
    fixture = TestBed.createComponent(BackNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
