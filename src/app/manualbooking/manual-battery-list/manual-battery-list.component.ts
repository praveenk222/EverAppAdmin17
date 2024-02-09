import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { ProductService } from '../../services/product.service';
import { PostResult } from '../../models/PostResult';

@Component({
  selector: 'app-manual-battery-list',
  templateUrl: './manual-battery-list.component.html',
  styleUrl: './manual-battery-list.component.css'
})
export class ManualBatteryListComponent {
  productList: any;
  producttype: number = 3503;
  azimageUrl: any = environment.azimageUrl_hub;
  constructor(private productservice: ProductService) {
    this.productservice.getProducts(this.producttype).then((result: PostResult) => {
      console.log(result)
      if (result.status) {
        console.log(result.message)
        // this.router.na
        this.productList = result.message;
      }
    })
      .catch((error) => { console.error(error) })
  }
open(){
  
}
}
