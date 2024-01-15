import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBatteryBookingsComponent } from './recent-battery-bookings.component';

describe('RecentBatteryBookingsComponent', () => {
  let component: RecentBatteryBookingsComponent;
  let fixture: ComponentFixture<RecentBatteryBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentBatteryBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentBatteryBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
