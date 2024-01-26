import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicepageComponent } from './bookinghistory/invoicepage/invoicepage.component';

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
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
  { path: '', loadChildren: () => import('./commonFiles/sharedcomponents/admin/admin.module').then(m => m.AdminModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
