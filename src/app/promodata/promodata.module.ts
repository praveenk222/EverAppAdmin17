import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromodataRoutingModule } from './promodata-routing.module';
import { PromodataComponent } from './promodata.component';
import { AddPromocodeComponent } from './add-promocode/add-promocode.component';


@NgModule({
  declarations: [
    PromodataComponent,
    AddPromocodeComponent
  ],
  imports: [
    CommonModule,
    PromodataRoutingModule
  ]
})
export class PromodataModule { }
