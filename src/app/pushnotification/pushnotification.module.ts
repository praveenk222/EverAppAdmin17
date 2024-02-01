import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushnotificationRoutingModule } from './pushnotification-routing.module';
import { PushnotificationComponent } from './pushnotification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';


@NgModule({
  declarations: [
    PushnotificationComponent,
    AddNotificationComponent
  ],
  imports: [
    CommonModule,
    PushnotificationRoutingModule,
    MaterialModule
  ]
})
export class PushnotificationModule { }
