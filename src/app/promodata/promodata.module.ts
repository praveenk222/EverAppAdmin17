import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromodataRoutingModule } from './promodata-routing.module';
import { PromodataComponent } from './promodata.component';


@NgModule({
  declarations: [
    PromodataComponent
  ],
  imports: [
    CommonModule,
    PromodataRoutingModule
  ]
})
export class PromodataModule { }
