import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-dialog-add-promocode',
  templateUrl: './dialog-add-promocode.component.html',
  styleUrl: './dialog-add-promocode.component.css'
})
export class DialogAddPromocodeComponent {
promoForm!:FormGroup;
show: boolean = false; 
constructor(private _pf:FormBuilder,private _us:UsersService){
  this.promoForm=this._pf.group({
 
    OfferName: null,
    Description:null,
    StartDate: null,
    EndDate: null,
    MaxAmount: null,
    DiscountPercentage: null,
    CouponID: null,
    CouponCode: null,
    IsUsed: false,
    ExpiryDate: null,
    UserID:null,
    ProductID:null,
    Demography:null,
    Age:null,
    

  })
}
addPromocard(){

  this._us.savepromo(this.promoForm.value).subscribe((res:any)=>{
    console.log(res);

  })
}

}
