import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualbookingRoutingModule } from './manualbooking-routing.module';
import { ManualbookingComponent } from './manualbooking.component';


@NgModule({
  declarations: [
    ManualbookingComponent
  ],
  imports: [
    CommonModule,
    ManualbookingRoutingModule
  ]
})
export class ManualbookingModule { }
