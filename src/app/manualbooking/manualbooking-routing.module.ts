import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualbookingComponent } from './manualbooking.component';

const routes: Routes = [{ path: '', component: ManualbookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualbookingRoutingModule { }
