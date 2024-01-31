import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { UserpermissionsComponent } from './userpermissions/userpermissions.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { AdminuserdetailsComponent } from './adminuserdetails/adminuserdetails.component';


@NgModule({
  declarations: [
    SettingsComponent,
    UserpermissionsComponent,
    AdminuserdetailsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule
  ]
})
export class SettingsModule { }
