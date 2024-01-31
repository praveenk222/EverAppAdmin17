import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaddNotificationComponent } from './dialogadd-notification.component';

describe('DialogaddNotificationComponent', () => {
  let component: DialogaddNotificationComponent;
  let fixture: ComponentFixture<DialogaddNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogaddNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogaddNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
