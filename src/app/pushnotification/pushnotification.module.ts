import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushnotificationRoutingModule } from './pushnotification-routing.module';
import { PushnotificationComponent } from './pushnotification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';


@NgModule({
  declarations: [
    PushnotificationComponent,
    AddNotificationComponent
  ],
  imports: [
    CommonModule,
    PushnotificationRoutingModule
  ]
})
export class PushnotificationModule { }
