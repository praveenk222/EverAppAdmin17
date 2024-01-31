import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBikeWasBookingComponent } from './all-bike-was-booking.component';

describe('AllBikeWasBookingComponent', () => {
  let component: AllBikeWasBookingComponent;
  let fixture: ComponentFixture<AllBikeWasBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBikeWasBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllBikeWasBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
