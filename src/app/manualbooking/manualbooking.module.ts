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
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { TimeDifferencePipe } from '../services/time-difference.pipe';
import { SharedModule } from '../services/shared.module';
import { ManualBatteryListComponent } from './manual-battery-list/manual-battery-list.component';
import { ManualWashstationComponent } from './manual-washstation/manual-washstation.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ManualPaymentSuccessComponent } from './manual-payment-success/manual-payment-success.component';
import { ManualBookingUserBookingSummaryComponent } from './manual-booking-user-booking-summary/manual-booking-user-booking-summary.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    ManualbookingComponent,
    EvrentalsComponent,
    EvrentalDetailsComponent,
    ManualBookingBikelistComponent,
    ManualBookingUsersdetailsComponent,
    ManualBookingPaymentsComponent,
    ManualBookingSummaryComponent,
    ManualBookingProductdetailsComponent,
    ManualBatteryListComponent,
    ManualBatteryListComponent,
    ManualWashstationComponent,
    ManualWashstationComponent,
    ManualPaymentSuccessComponent,
    ManualBookingUserBookingSummaryComponent,
    ManualBookingSummaryComponent,
    ManualPaymentSuccessComponent
  ],
  imports: [
    CommonModule,
    ManualbookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    WebcamModule,
  ],
  providers: [
    DatePipe,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 ,    horizontalPosition: 'end',
    verticalPosition: 'top',} },
    ],
})
export class ManualbookingModule { }
