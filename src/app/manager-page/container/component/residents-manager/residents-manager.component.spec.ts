import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsManagerComponent } from './residents-manager.component';

describe('ResidentsManagerComponent', () => {
  let component: ResidentsManagerComponent;
  let fixture: ComponentFixture<ResidentsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentsManagerComponent]
    });
    fixture = TestBed.createComponent(ResidentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
