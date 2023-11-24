import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopicComponent } from './menu-topic.component';

describe('MenuTopicComponent', () => {
  let component: MenuTopicComponent;
  let fixture: ComponentFixture<MenuTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTopicComponent]
    });
    fixture = TestBed.createComponent(MenuTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
