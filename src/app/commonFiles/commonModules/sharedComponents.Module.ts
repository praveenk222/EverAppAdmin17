
import { NgModule } from '@angular/core';
import { PaginationComponent } from '../sharedcomponents/pagination/pagination.component';
import { MaterialModule } from './material.module';
let importdata = [
  // SidenavComponent,
  PaginationComponent
];
@NgModule(

  {
    imports: [MaterialModule],
    declarations: [importdata],
    exports: [importdata],
  })

export class SharedComponentsModule { }