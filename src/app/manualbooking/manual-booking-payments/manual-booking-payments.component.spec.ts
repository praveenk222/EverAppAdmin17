import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBookingPaymentsComponent } from './manual-booking-payments.component';

describe('ManualBookingPaymentsComponent', () => {
  let component: ManualBookingPaymentsComponent;
  let fixture: ComponentFixture<ManualBookingPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualBookingPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBookingPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
