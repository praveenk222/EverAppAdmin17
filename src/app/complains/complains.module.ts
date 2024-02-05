import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainsRoutingModule } from './complains-routing.module';
import { ComplainsComponent } from './complains.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ComplainsDetailsComponent } from './complains-details/complains-details.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';



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

  ]
})
export class ComplainsModule { }
