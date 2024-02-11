import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPaymentSuccessComponent } from './manual-payment-success.component';

describe('ManualPaymentSuccessComponent', () => {
  let component: ManualPaymentSuccessComponent;
  let fixture: ComponentFixture<ManualPaymentSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualPaymentSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualPaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
