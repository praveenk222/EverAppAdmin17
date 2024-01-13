import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushnotificationRoutingModule } from './pushnotification-routing.module';
import { PushnotificationComponent } from './pushnotification.component';


@NgModule({
  declarations: [
    PushnotificationComponent
  ],
  imports: [
    CommonModule,
    PushnotificationRoutingModule
  ]
})
export class PushnotificationModule { }
