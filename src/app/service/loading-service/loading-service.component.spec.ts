import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingServiceComponent } from './loading-service.component';

describe('LoadingServiceComponent', () => {
  let component: LoadingServiceComponent;
  let fixture: ComponentFixture<LoadingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
