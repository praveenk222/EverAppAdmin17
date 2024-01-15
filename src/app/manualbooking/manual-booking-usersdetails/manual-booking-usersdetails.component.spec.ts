import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBookingUsersdetailsComponent } from './manual-booking-usersdetails.component';

describe('ManualBookingUsersdetailsComponent', () => {
  let component: ManualBookingUsersdetailsComponent;
  let fixture: ComponentFixture<ManualBookingUsersdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualBookingUsersdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBookingUsersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
