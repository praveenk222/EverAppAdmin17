import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookinghistoryComponent } from './bookinghistory.component';
import { HubBookingSummaryComponent } from './hub-booking-summary/hub-booking-summary.component';
import { AllEbikeBookingComponent } from './all-ebike-booking/all-ebike-booking.component';
import { InvoicepageComponent } from './invoicepage/invoicepage.component';
import { BookingDetailsUserComponent } from './booking-details-user/booking-details-user.component';

const routes: Routes = [
  { path: '', component: BookinghistoryComponent },
  { path: 'hub_booking', component: HubBookingSummaryComponent },
  { path: 'ebike_booking', component: AllEbikeBookingComponent },
  { path: 'invoice', component: InvoicepageComponent },
  { path: 'user_booking_details', component: BookingDetailsUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookinghistoryRoutingModule { }
