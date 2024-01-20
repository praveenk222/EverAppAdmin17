import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubBookingSummaryComponent } from './hub-booking-summary.component';

describe('HubBookingSummaryComponent', () => {
  let component: HubBookingSummaryComponent;
  let fixture: ComponentFixture<HubBookingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HubBookingSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HubBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
