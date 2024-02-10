import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogadd-notification',
  templateUrl: './dialogadd-notification.component.html',
  styleUrl: './dialogadd-notification.component.css'
})
export class DialogaddNotificationComponent implements OnInit {
  notifyForm!:FormGroup;
  notiydetails:any
  constructor(private _rf:FormBuilder,private snackBar: MatSnackBar,private reg:UsersService,private router:Router,  @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogaddNotificationComponent>){
console.log(data)
    this.notifyForm = this._rf.group({
      NotificationName:"",
      Description:"",
      "UserID":"0"
    })
   
  }
  ngOnInit(){
    if(this.data){debugger
      this.notifyForm.patchValue({
        NotificationName:this.data.NotificationName,
        Description:this.data.Description
      })
    }
  }
  notifySubmit(){
    const data = this.notifyForm.value;
    this.reg.savenotification(data).subscribe((res)=>{
      this.dialogRef.close();
      // this.notiydetails=res;
      console.log(res)
    })
  }
  close()
  {
    this.dialogRef.close();
  }
}
