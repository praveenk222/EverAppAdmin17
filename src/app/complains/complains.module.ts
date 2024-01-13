import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainsRoutingModule } from './complains-routing.module';
import { ComplainsComponent } from './complains.component';


@NgModule({
  declarations: [
    ComplainsComponent
  ],
  imports: [
    CommonModule,
    ComplainsRoutingModule
  ]
})
export class ComplainsModule { }
