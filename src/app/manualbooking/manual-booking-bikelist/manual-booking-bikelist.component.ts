import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PostResult } from '../../models/PostResult';

@Component({
  selector: 'app-manual-booking-bikelist',
  templateUrl: './manual-booking-bikelist.component.html',
  styleUrl: './manual-booking-bikelist.component.css'
})
export class ManualBookingBikelistComponent {
  productList:any;
  producttype:number=3502;
constructor(private productservice: ProductService){
this.productservice.getProducts(this.producttype).then((result:PostResult)=>{
  console.log(result)
  if (result.status) {
    console.log(result.message)
    // this.router.na
    this.productList = result.message;       
  }

})
.catch((error)=>{console.error(error)})
}

}
