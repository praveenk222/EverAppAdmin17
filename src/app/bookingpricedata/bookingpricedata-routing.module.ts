import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpricedataComponent } from './bookingpricedata.component';

const routes: Routes = [{ path: '', component: BookingpricedataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingpricedataRoutingModule { }
