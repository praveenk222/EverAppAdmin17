import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingpricedataRoutingModule } from './bookingpricedata-routing.module';
import { BookingpricedataComponent } from './bookingpricedata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { AddpricedataComponent } from '../addpricedata/addpricedata.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


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

    
  ],
  providers:[
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 ,    horizontalPosition: 'end',
    verticalPosition: 'top',} },
  ]
})
export class BookingpricedataModule { }
