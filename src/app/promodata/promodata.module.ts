import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromodataRoutingModule } from './promodata-routing.module';
import { PromodataComponent } from './promodata.component';
import { AddPromocodeComponent } from './add-promocode/add-promocode.component';
import { MaterialModule } from '../commonFiles/commonModules/material.module';


@NgModule({
  declarations: [
    PromodataComponent,
    AddPromocodeComponent
  ],
  imports: [
    CommonModule,
    PromodataRoutingModule,
MaterialModule 
    
  ]
})
export class PromodataModule { }
