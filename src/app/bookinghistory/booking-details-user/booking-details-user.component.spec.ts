import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsUserComponent } from './booking-details-user.component';

describe('BookingDetailsUserComponent', () => {
  let component: BookingDetailsUserComponent;
  let fixture: ComponentFixture<BookingDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDetailsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
