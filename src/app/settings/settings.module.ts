import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { UserpermissionsComponent } from './userpermissions/userpermissions.component';


@NgModule({
  declarations: [
    SettingsComponent,
    UserpermissionsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
