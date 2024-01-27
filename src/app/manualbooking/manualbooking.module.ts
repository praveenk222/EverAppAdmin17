import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ManualbookingRoutingModule } from './manualbooking-routing.module';
import { ManualbookingComponent } from './manualbooking.component';
import { EvrentalsComponent } from './evrentals/evrentals.component';
import { EvrentalDetailsComponent } from './evrental-details/evrental-details.component';
import { ManualBookingBikelistComponent } from './manual-booking-bikelist/manual-booking-bikelist.component';
import { ManualBookingUsersdetailsComponent } from './manual-booking-usersdetails/manual-booking-usersdetails.component';
import { ManualBookingPaymentsComponent } from './manual-booking-payments/manual-booking-payments.component';
import { ManualBookingSummaryComponent } from './manual-booking-summary/manual-booking-summary.component';
import { ManualBookingProductdetailsComponent } from './manual-booking-productdetails/manual-booking-productdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManualbookingComponent,
    EvrentalsComponent,
    EvrentalDetailsComponent,
    ManualBookingBikelistComponent,
    ManualBookingUsersdetailsComponent,
    ManualBookingPaymentsComponent,
    ManualBookingSummaryComponent,
    ManualBookingProductdetailsComponent
  ],
  imports: [
    CommonModule,
    ManualbookingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    ],
})
export class ManualbookingModule { }
