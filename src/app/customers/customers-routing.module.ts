import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerAllbookingsComponent } from './customer-allbookings/customer-allbookings.component';
import { CustomerTrackComponent } from './customer-track/customer-track.component';

const routes: Routes = [
  
  { path: '', component: CustomersComponent },
  { path: 'details', component: CustomerDetailsComponent },
  { path: 'allbookings', component: CustomerAllbookingsComponent },
  { path: 'track', component: CustomerTrackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
