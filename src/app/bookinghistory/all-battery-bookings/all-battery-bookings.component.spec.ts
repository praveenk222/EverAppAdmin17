import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBatteryBookingsComponent } from './all-battery-bookings.component';

describe('AllBatteryBookingsComponent', () => {
  let component: AllBatteryBookingsComponent;
  let fixture: ComponentFixture<AllBatteryBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBatteryBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllBatteryBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
