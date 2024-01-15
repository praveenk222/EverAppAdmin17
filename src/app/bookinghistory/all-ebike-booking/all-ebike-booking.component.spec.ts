import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEbikeBookingComponent } from './all-ebike-booking.component';

describe('AllEbikeBookingComponent', () => {
  let component: AllEbikeBookingComponent;
  let fixture: ComponentFixture<AllEbikeBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllEbikeBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllEbikeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
