
import { NgModule } from '@angular/core';
import { PaginationComponent } from '../sharedcomponents/pagination/pagination.component';
import { MaterialModule } from './material.module';
import { AutoserachComponent } from '../sharedcomponents/autoserach/autoserach.component';
let importdata = [
  // SidenavComponent,
  PaginationComponent,
];
@NgModule(

  {
    imports: [MaterialModule],
    declarations: [importdata],
    exports: [importdata],
  })

export class SharedComponentsModule { }