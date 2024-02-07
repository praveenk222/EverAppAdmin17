import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainsRoutingModule } from './complains-routing.module';
import { ComplainsComponent } from './complains.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ComplainsDetailsComponent } from './complains-details/complains-details.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ComplainsComponent,
    AddTicketComponent,
    ComplainsDetailsComponent
  ],
  imports: [
    CommonModule,
    ComplainsRoutingModule,
    MaterialModule

  ],
  providers:[
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 ,    horizontalPosition: 'end',
    verticalPosition: 'top',} },
  ]
 
})
export class ComplainsModule { }
