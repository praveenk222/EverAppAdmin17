import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';


@NgModule({
  declarations: [
    RevenueComponent
  ],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    MaterialModule
  ]
})
export class RevenueModule { }
