import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../commonFiles/commonModules/sharedComponents.Module';
import { AutoserachComponent } from '../commonFiles/sharedcomponents/autoserach/autoserach.component';


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
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    SharedComponentsModule,
    AutoserachComponent
  ]
})
export class RevenueModule { }
