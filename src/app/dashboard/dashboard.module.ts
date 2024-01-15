import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DialogPopupService } from '../commonFiles/commonServices/dialogPopup.service';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedPrimeNgModule } from '../commonFiles/commonModules/shared.Module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedPrimeNgModule,
    MaterialModule
    
  ],
  providers:[DialogPopupService],
})
export class DashboardModule { }
