import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { AddTicketComponent } from '../complains/add-ticket/add-ticket.component';

@Component({
  selector: 'app-addpricedata',
  templateUrl: './addpricedata.component.html',
  styleUrl: './addpricedata.component.css'
})
export class AddpricedataComponent {
priceForm:FormGroup;
postdata:any;
constructor(private pf:FormBuilder,private us:UsersService,public dialogRef: MatDialogRef<AddpricedataComponent>){
  this.priceForm=this.pf.group({
    paytype:'',
    payment:''
  })
}
addpricecard(){
  const date=this.priceForm.value;
  this.us.saveUserdata(this.postdata).subscribe((res:any)=>{
    console.log(res)
    this.dialogRef.close();
  })
}
}
