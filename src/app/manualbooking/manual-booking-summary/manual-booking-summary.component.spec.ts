import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBookingSummaryComponent } from './manual-booking-summary.component';

describe('ManualBookingSummaryComponent', () => {
  let component: ManualBookingSummaryComponent;
  let fixture: ComponentFixture<ManualBookingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualBookingSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
