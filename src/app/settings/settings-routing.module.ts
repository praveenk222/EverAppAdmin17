import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { UserpermissionsComponent } from './userpermissions/userpermissions.component';
import { AdminuserdetailsComponent } from './adminuserdetails/adminuserdetails.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'users', component: UserpermissionsComponent },
  { path: 'details', component: AdminuserdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
