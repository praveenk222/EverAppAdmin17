import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { AllvehiclesComponent } from './allvehicles/allvehicles.component';
import { AllBattriesComponent } from './all-battries/all-battries.component';
import { AllWashhubsComponent } from './all-washhubs/all-washhubs.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { AllHubstationComponent } from './all-hubstation/all-hubstation.component';
import { SharedPrimeNgModule } from '../commonFiles/commonModules/shared.Module';
import { RecentBatteryComponent } from './recent-battery/recent-battery.component';
import { RecentHubsComponent } from './recent-hubs/recent-hubs.component';
import { AddbikesComponent } from './addbikes/addbikes.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { SharedComponentsModule } from '../commonFiles/commonModules/sharedComponents.Module';
import { AllbikesComponent } from './allvehicles/allbikes/allbikes.component';
import { AllbhulistComponent } from './all-hubstation/allbhulist/allbhulist.component';
import { AddbatteryComponent } from './addbattery/addbattery.component';
import { RemainingbikesComponent } from './allvehicles/remainingbikes/remainingbikes.component';

@NgModule({
  declarations: [
    InventoryComponent,
    AllvehiclesComponent,
    AllBattriesComponent,
    AllWashhubsComponent,
    BikeDetailsComponent,
    AllHubstationComponent,
    RecentBatteryComponent,
    RecentHubsComponent,
    AddbikesComponent,
    AllbikesComponent,
    AllbhulistComponent,
    AddbatteryComponent,
    RemainingbikesComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule,
    SharedComponentsModule,
    ReactiveFormsModule,FormsModule,
  ]
})
export class InventoryModule { }
