import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBikeWashBookingsComponent } from './recent-bike-wash-bookings.component';

describe('RecentBikeWashBookingsComponent', () => {
  let component: RecentBikeWashBookingsComponent;
  let fixture: ComponentFixture<RecentBikeWashBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentBikeWashBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentBikeWashBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
