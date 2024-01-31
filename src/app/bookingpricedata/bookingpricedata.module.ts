import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingpricedataRoutingModule } from './bookingpricedata-routing.module';
import { BookingpricedataComponent } from './bookingpricedata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    BookingpricedataComponent
  ],
  imports: [
    CommonModule,
    BookingpricedataRoutingModule,
    ReactiveFormsModule,FormsModule,MatMenuModule
  ]
})
export class BookingpricedataModule { }
