import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { AddTicketComponent } from '../complains/add-ticket/add-ticket.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addpricedata',
  templateUrl: './addpricedata.component.html',
  styleUrl: './addpricedata.component.css'
})
export class AddpricedataComponent  implements OnInit{
priceForm:FormGroup;
postdata:any;
btnName:string='Add'
constructor(private pf:FormBuilder,private us:UsersService,public dialogRef: MatDialogRef<AddpricedataComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  public snackBar: MatSnackBar){
    if(data){

      if(this.data.ID > 0){
        this.btnName='update'
      }
    }
  this.priceForm=this.pf.group({
      "ID": 0,
      "PayTypes": "",
      "Amount": 0,
      "IsActive": true,
  })

}
ngOnInit(){
  this.priceForm.patchValue(this.data)
  console.log(this.data)
}
addpricecard(){
  const data=this.priceForm.value;
  console.log(data)
  this.us.savePrice(data).subscribe((res:any)=>{
    console.log(res)
    if(res.status){

      this.snackBar.open(res.message);
      
    }
    this.dialogRef.close();
  })
}
}
