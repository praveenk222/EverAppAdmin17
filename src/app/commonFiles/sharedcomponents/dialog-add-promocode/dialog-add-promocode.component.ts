import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SweetAlertServiceService } from '../../../services/sweet-alert-service.service';
import { PostResult } from '../../../models/PostResult';

@Component({
  selector: 'app-dialog-add-promocode',
  templateUrl: './dialog-add-promocode.component.html',
  styleUrl: './dialog-add-promocode.component.css'
})
export class DialogAddPromocodeComponent {
  promoForm!: FormGroup;
  show: boolean = false;
  button: string = 'Add';
  Data: any;
  constructor(private _pf: FormBuilder, private _us: UsersService, public dialogRef: MatDialogRef<DialogAddPromocodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private s_alert:SweetAlertServiceService) {
      debugger
    this.Data = data;
    console.log(data)
    this.formdata();

    if (data) {
      this.button = 'Edit'
   
      this.promoForm.get('OfferName')!.setValue(data.OfferName);
    this.promoForm.get('OfferDescription')!.setValue(data.OfferDescription);
    this.promoForm.get('StartDate')!.setValue(data.StartDate);
    this.promoForm.get('EndDate')!.setValue(data.EndDate);
    this.promoForm.get('MaxAmount')!.setValue(data.MaxAmount);
    this.promoForm.get('DiscountPercentage')!.setValue(data.DiscountPercentage);
    this.promoForm.get('CouponCode')!.setValue(data.CouponCode);
    this.promoForm.get('IsUsed')!.setValue(data.IsUsed);
    this.promoForm.get('ExpiryDate')!.setValue(data.ExpiryDate);
    this.promoForm.get('ProductID')!.setValue(data.ProductID);
    this.promoForm.get('UserID')!.setValue(data.UserID);
    this.promoForm.get('Demography')!.setValue(data.Demography);
    this.promoForm.get('Age')!.setValue(data.Age);
    this.promoForm.get('OfferID')!.setValue(data.OfferID);
    this.promoForm.get('CoupponID')!.setValue(data.CoupponID);
    } else {
      this.button = 'Add'
    }
  }
  formdata() {
    this.promoForm = this._pf.group({
      OfferName: null,
      OfferID:0,
      CoupponID:null,
      OfferDescription: null,
      StartDate: null,
      EndDate: null,
      MaxAmount: null,
      DiscountPercentage: null,
      CouponCode: null,
      IsUsed: false,
      ExpiryDate: null,
      UserID: null,
      ProductID: null,
      Demography: null,
      Age: null,
    })
  }


  addPromocard() {
    if (this.button == 'Add') {
      this._us.savepromo(this.promoForm.value).subscribe((res: any) => {
        console.log(res);

      })
    } else {
      let data = this.promoForm.value
      data['OfferID'] = this.Data.OfferID;
      data['CouponID'] = this.Data.CouponID;
      this._us.updatepromo(data).subscribe((res: PostResult) => {
        console.log(res);
        if(res.status){
          this.dialogRef.close();
          const title=''
          res.message='Updated SuccessFully!!'
          this.s_alert.showSuccess(title,res.message)

        }

      })
    }
  }

}
