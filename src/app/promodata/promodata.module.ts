import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromodataRoutingModule } from './promodata-routing.module';
import { PromodataComponent } from './promodata.component';
import { AddPromocodeComponent } from './add-promocode/add-promocode.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';
import { DialogAddPromocodeComponent } from '../commonFiles/sharedcomponents/dialog-add-promocode/dialog-add-promocode.component';


@NgModule({
  declarations: [
    PromodataComponent,
    AddPromocodeComponent,
    DialogAddPromocodeComponent
  ],
  imports: [
    CommonModule,
    PromodataRoutingModule,
MaterialModule 
    
  ]
})
export class PromodataModule { }
