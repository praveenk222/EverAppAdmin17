import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingpricedataRoutingModule } from './bookingpricedata-routing.module';
import { BookingpricedataComponent } from './bookingpricedata.component';


@NgModule({
  declarations: [
    BookingpricedataComponent
  ],
  imports: [
    CommonModule,
    BookingpricedataRoutingModule
  ]
})
export class BookingpricedataModule { }
