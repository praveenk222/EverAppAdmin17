import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevenueComponent } from './revenue.component';
import { ResolvegurdService } from '../services/resolvegurd.service';

const routes: Routes = [
  { path: '', component: RevenueComponent
  // ,resolve:{data:ResolvegurdService} 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueRoutingModule { }
