import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualbookingComponent } from './manualbooking.component';
import { ManualBookingBikelistComponent } from './manual-booking-bikelist/manual-booking-bikelist.component';
import { ManualBookingProductdetailsComponent } from './manual-booking-productdetails/manual-booking-productdetails.component';
import { ManualBookingUsersdetailsComponent } from './manual-booking-usersdetails/manual-booking-usersdetails.component';
import { ManualBookingPaymentsComponent } from './manual-booking-payments/manual-booking-payments.component';
import { ManualBookingSummaryComponent } from './manual-booking-summary/manual-booking-summary.component';

const routes: Routes = [
  { path: '', component: ManualbookingComponent },
  { path: 'bike_list', component: ManualBookingBikelistComponent },
  { path: 'productdetails', component: ManualBookingProductdetailsComponent },
  { path: 'userdetails', component: ManualBookingUsersdetailsComponent },
  { path: 'paymentdetails', component: ManualBookingPaymentsComponent },
  { path: 'bookingsummary', component: ManualBookingSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualbookingRoutingModule { }
