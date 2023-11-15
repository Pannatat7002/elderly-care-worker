import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselActivityComponent } from './carousel-activity.component';

describe('CarouselActivityComponent', () => {
  let component: CarouselActivityComponent;
  let fixture: ComponentFixture<CarouselActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
