import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    RevenueComponent,
    
  ],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    MaterialModule,
    DashboardModule,
    NgChartsModule,
  ]
})
export class RevenueModule { }
