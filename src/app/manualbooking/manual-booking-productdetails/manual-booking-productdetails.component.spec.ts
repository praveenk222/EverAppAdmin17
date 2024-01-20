import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBookingProductdetailsComponent } from './manual-booking-productdetails.component';

describe('ManualBookingProductdetailsComponent', () => {
  let component: ManualBookingProductdetailsComponent;
  let fixture: ComponentFixture<ManualBookingProductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualBookingProductdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBookingProductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
