import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DialogPopupService } from '../commonFiles/commonServices/dialogPopup.service';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedPrimeNgModule } from '../commonFiles/commonModules/shared.Module';
import { NgChartsModule } from "ng2-charts";
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LinechartComponent,
    BarchartComponent,
    PiechartComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedPrimeNgModule,
    MaterialModule,
    NgChartsModule,

    
  ],
  providers:[DialogPopupService],
})
export class DashboardModule { }
