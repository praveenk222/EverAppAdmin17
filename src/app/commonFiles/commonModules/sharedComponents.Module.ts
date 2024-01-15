
import { NgModule } from '@angular/core';
import { SidenavComponent } from '../sharedcomponents/sidenav/sidenav.component';
let importdata=[ 
    SidenavComponent
   ];
@NgModule(
    
    {

  imports: [importdata],
  exports: [ importdata ],
})

export class SharedModule { }