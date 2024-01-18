import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DoughnutController } from 'chart.js';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';

const routes: Routes = [
  { path: '', component: ChartsComponent },
  { path: 'p', component: PiechartComponent },
  { path: 'l', component: LinechartComponent },
  { path: 'd', component: DoughnutchartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
