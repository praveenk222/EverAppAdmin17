import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookinghistoryRoutingModule } from './bookinghistory-routing.module';
import { BookinghistoryComponent } from './bookinghistory.component';
import {  SharedPrimeNgModule } from '../commonFiles/commonModules/shared.Module';
import { HubBookingSummaryComponent } from './hub-booking-summary/hub-booking-summary.component';
import { AllEbikeBookingComponent } from './all-ebike-booking/all-ebike-booking.component';
import { BookingDetailsUserComponent } from './booking-details-user/booking-details-user.component';
import { AllBatteryBookingsComponent } from './all-battery-bookings/all-battery-bookings.component';
import { RecentBatteryBookingsComponent } from './recent-battery-bookings/recent-battery-bookings.component';
import { RecentBikeWashBookingsComponent } from './recent-bike-wash-bookings/recent-bike-wash-bookings.component';
import { HubsbookingsummarycardsComponent } from './hubsbookingsummarycards/hubsbookingsummarycards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { AllBikeWasBookingComponent } from './all-bike-was-booking/all-bike-was-booking.component';

@NgModule({
  declarations: [
    BookinghistoryComponent,
    HubBookingSummaryComponent,
    AllEbikeBookingComponent,
    BookingDetailsUserComponent,
    AllBatteryBookingsComponent,
    RecentBatteryBookingsComponent,
    RecentBikeWashBookingsComponent,
    HubsbookingsummarycardsComponent,
    AllBikeWasBookingComponent
  ],
  imports: [
    CommonModule,
    BookinghistoryRoutingModule,
    ReactiveFormsModule,FormsModule,
    MaterialModule
  ]
})
export class BookinghistoryModule { }
