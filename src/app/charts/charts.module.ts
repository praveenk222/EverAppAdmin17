import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { NgChartsModule } from 'ng2-charts';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';



@NgModule({
  declarations: [
    ChartsComponent,
    PiechartComponent,
    LinechartComponent,
 
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule,

  ]
})
export class ChartsModule { }
