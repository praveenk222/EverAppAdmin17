import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushnotificationRoutingModule } from './pushnotification-routing.module';
import { PushnotificationComponent } from './pushnotification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    PushnotificationComponent,
    AddNotificationComponent
  ],
  imports: [
    CommonModule,
    PushnotificationRoutingModule,
    MaterialModule
  ],
  providers:[
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 ,    horizontalPosition: 'end',
    verticalPosition: 'top',} },
  ]
})
export class PushnotificationModule { }
