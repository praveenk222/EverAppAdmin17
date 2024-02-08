import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-addpricedata',
  templateUrl: './addpricedata.component.html',
  styleUrl: './addpricedata.component.css'
})
export class AddpricedataComponent {
priceForm:FormGroup;
data:any;
constructor(private pf:FormBuilder,private us:UsersService){
  this.priceForm=this.pf.group({
    paytype:'',
    payment:''
  })
}
addpriceCard(){
  const date=this.priceForm.value;
  this.us.postpricedata(this.data).subscribe((res:any)=>{
    console.log(res)
  })
}
}
