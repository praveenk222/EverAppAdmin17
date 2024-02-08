import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingpricedataRoutingModule } from './bookingpricedata-routing.module';
import { BookingpricedataComponent } from './bookingpricedata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { AddpricedataComponent } from '../addpricedata/addpricedata.component';


@NgModule({
  declarations: [
    BookingpricedataComponent,
    AddpricedataComponent
  ],
  imports: [
    CommonModule,
    BookingpricedataRoutingModule,
    ReactiveFormsModule,FormsModule,MatMenuModule,
 MaterialModule 

    
  ]
})
export class BookingpricedataModule { }
