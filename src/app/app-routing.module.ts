import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path: 'bookinghistory',
    loadChildren: () => import('./bookinghistory/bookinghistory.module').then(m => m.BookinghistoryModule)
  },
  { path: 'revenue', loadChildren: () => import('./revenue/revenue.module').then(m => m.RevenueModule) },
  { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'manualbooking', loadChildren: () => import('./manualbooking/manualbooking.module').then(m => m.ManualbookingModule) },
  { path: 'bookingpricedata', loadChildren: () => import('./bookingpricedata/bookingpricedata.module').then(m => m.BookingpricedataModule) },
  { path: 'promodata', loadChildren: () => import('./promodata/promodata.module').then(m => m.PromodataModule) },
  { path: 'pushnotification', loadChildren: () => import('./pushnotification/pushnotification.module').then(m => m.PushnotificationModule) },
  { path: 'complains', loadChildren: () => import('./complains/complains.module').then(m => m.ComplainsModule) },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
