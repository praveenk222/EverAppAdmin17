import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingpricedataComponent } from './bookingpricedata.component';

describe('BookingpricedataComponent', () => {
  let component: BookingpricedataComponent;
  let fixture: ComponentFixture<BookingpricedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingpricedataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingpricedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
