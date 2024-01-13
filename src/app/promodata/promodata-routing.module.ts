import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromodataComponent } from './promodata.component';

const routes: Routes = [{ path: '', component: PromodataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromodataRoutingModule { }
