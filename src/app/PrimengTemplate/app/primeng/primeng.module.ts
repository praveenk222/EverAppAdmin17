import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PrimengRoutingModule } from './primeng-routing.module';
import { PrimengComponent } from './primeng.component';
import { SharedPrimeNgModule } from '../../../commonFiles/commonModules/shared.Module';
import { NotfoundComponent } from '../demo/components/notfound/notfound.component';
import { IconService } from '../demo/service/icon.service';
import { CustomerService } from '../demo/service/customer.service';
import { CountryService } from '../demo/service/country.service';
import { EventService } from '../demo/service/event.service';
import { NodeService } from '../demo/service/node.service';
import { PhotoService } from '../demo/service/photo.service';
import { ProductService } from '../demo/service/product.service';
import { AppSidebarComponent } from '../layout/app.sidebar.component';


@NgModule({
  declarations: [
    PrimengComponent,NotfoundComponent
  ],
  imports: [
    CommonModule,
    PrimengRoutingModule,
    SharedPrimeNgModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService
],
})
export class PrimengModule { }
