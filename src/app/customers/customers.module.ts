import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { SharedPrimeNgModule } from '../commonFiles/commonModules/shared.Module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerAllbookingsComponent } from './customer-allbookings/customer-allbookings.component';
import { CustomerTrackComponent } from './customer-track/customer-track.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../commonFiles/commonModules/material.module';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailsComponent,
    CustomerAllbookingsComponent,
    CustomerTrackComponent,
    CustomerInvoiceComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,FormsModule,
    MaterialModule
  ]
})
export class CustomersModule { }
