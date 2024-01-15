import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllbookingsComponent } from './customer-allbookings.component';

describe('CustomerAllbookingsComponent', () => {
  let component: CustomerAllbookingsComponent;
  let fixture: ComponentFixture<CustomerAllbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerAllbookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerAllbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
