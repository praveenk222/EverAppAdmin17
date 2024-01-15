import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualbookingComponent } from './manualbooking.component';
import { ManualBookingBikelistComponent } from './manual-booking-bikelist/manual-booking-bikelist.component';

const routes: Routes = [
  { path: '', component: ManualbookingComponent },
  { path: 'bike-list', component: ManualBookingBikelistComponent },
  { path: '', component: ManualbookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualbookingRoutingModule { }
