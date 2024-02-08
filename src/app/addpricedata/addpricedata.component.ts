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
postdata:any;
constructor(private pf:FormBuilder,private us:UsersService){
  this.priceForm=this.pf.group({
    paytype:'',
    payment:''
  })
}
addpricecard(){
  const date=this.priceForm.value;
  this.us.saveUserdata(this.postdata).subscribe((res:any)=>{
    console.log(res)
  })
}
}
