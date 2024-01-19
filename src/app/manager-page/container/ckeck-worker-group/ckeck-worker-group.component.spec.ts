import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeckWorkerGroupComponent } from './ckeck-worker-group.component';

describe('CkeckWorkerGroupComponent', () => {
  let component: CkeckWorkerGroupComponent;
  let fixture: ComponentFixture<CkeckWorkerGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CkeckWorkerGroupComponent]
    });
    fixture = TestBed.createComponent(CkeckWorkerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
