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


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedPrimeNgModule,
    MaterialModule,
    NgChartsModule
    
  ],
  providers:[DialogPopupService],
})
export class DashboardModule { }
