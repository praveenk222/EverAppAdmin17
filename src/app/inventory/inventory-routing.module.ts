import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { AllvehiclesComponent } from './allvehicles/allvehicles.component';
import { AllWashhubsComponent } from './all-washhubs/all-washhubs.component';
import { AllHubstationComponent } from './all-hubstation/all-hubstation.component';
import { AllBattriesComponent } from './all-battries/all-battries.component';
import { AddbikesComponent } from './addbikes/addbikes.component';
import { AddbatteryComponent } from './addbattery/addbattery.component';

const routes: Routes = [
  { path: '', component: InventoryComponent },
  { path: 'bikedetails', component: BikeDetailsComponent },
  { path: 'allbikes', component: AllvehiclesComponent },
  { path: 'allbattries', component: AllBattriesComponent },
  { path: 'allwashhubs', component: AllWashhubsComponent },
  { path: 'allhubs', component: AllHubstationComponent },
  { path: 'addbike/:id', component: AddbikesComponent },
  {path:'all-battery',component:AllBattriesComponent},
  {path:'add-battery',component:AddbatteryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
