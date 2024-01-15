import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookinghistoryRoutingModule } from './bookinghistory-routing.module';
import { BookinghistoryComponent } from './bookinghistory.component';
import { SharedModule } from '../commonFiles/commonModules/shared.Module';


@NgModule({
  declarations: [
    BookinghistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookinghistoryRoutingModule
  ]
})
export class BookinghistoryModule { }
