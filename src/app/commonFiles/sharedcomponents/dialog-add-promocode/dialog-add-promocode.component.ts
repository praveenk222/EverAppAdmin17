import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-promocode',
  templateUrl: './dialog-add-promocode.component.html',
  styleUrl: './dialog-add-promocode.component.css'
})
export class DialogAddPromocodeComponent {
promoForm!:FormGroup;
constructor(private _pf:FormBuilder){
  this.promoForm=this._pf.group({
    name:'',
    desp:'',
    percentage:'',
    ammount:'',
    startdate:'',
    enddate:"",

  })
}
addPromocard(){
  const data=this.promoForm.value;
  console.log(data)
}
}
