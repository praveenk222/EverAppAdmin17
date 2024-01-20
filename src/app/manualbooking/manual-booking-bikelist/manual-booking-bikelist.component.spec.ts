import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBookingBikelistComponent } from './manual-booking-bikelist.component';

describe('ManualBookingBikelistComponent', () => {
  let component: ManualBookingBikelistComponent;
  let fixture: ComponentFixture<ManualBookingBikelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualBookingBikelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBookingBikelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
