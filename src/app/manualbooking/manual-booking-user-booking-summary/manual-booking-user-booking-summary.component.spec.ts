import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBookingUserBookingSummaryComponent } from './manual-booking-user-booking-summary.component';

describe('ManualBookingUserBookingSummaryComponent', () => {
  let component: ManualBookingUserBookingSummaryComponent;
  let fixture: ComponentFixture<ManualBookingUserBookingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualBookingUserBookingSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBookingUserBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
