import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SampleModel } from '../../models/product.model';

@Component({
  selector: 'app-manual-booking-productdetails',
  templateUrl: './manual-booking-productdetails.component.html',
  styleUrl: './manual-booking-productdetails.component.css'
})
export class ManualBookingProductdetailsComponent {
  itemId: any;
  data: any;

  constructor(private route: ActivatedRoute,private productservice: ProductService) {
    this.itemId = this.route.snapshot.paramMap.get('id');
console.log(this.itemId)
    this.productservice.getProductDetailsbyId(this.itemId).subscribe((res:SampleModel) => {
      this.data = res;
    })
  }
}
