import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTrackComponent } from './customer-track.component';

describe('CustomerTrackComponent', () => {
  let component: CustomerTrackComponent;
  let fixture: ComponentFixture<CustomerTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerTrackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
