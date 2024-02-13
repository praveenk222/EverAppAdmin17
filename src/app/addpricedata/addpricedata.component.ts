import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { AddTicketComponent } from '../complains/add-ticket/add-ticket.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addpricedata',
  templateUrl: './addpricedata.component.html',
  styleUrl: './addpricedata.component.css'
})
export class AddpricedataComponent {
priceForm:FormGroup;
postdata:any;
constructor(private pf:FormBuilder,private us:UsersService,public dialogRef: MatDialogRef<AddpricedataComponent>,public snackBar: MatSnackBar){
  this.priceForm=this.pf.group({
      "ID": 0,
      "PayTypes": "",
      "Amount": 0,
      "IsActive": true,
  })
}
addpricecard(){
  const date=this.priceForm.value;
  console.log(date)
  this.us.savePrice(this.postdata).subscribe((res:any)=>{
    console.log(res)
    this.snackBar.open(res.message);
    this.dialogRef.close();
  })
}
}
