import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogadd-notification',
  templateUrl: './dialogadd-notification.component.html',
  styleUrl: './dialogadd-notification.component.css'
})
export class DialogaddNotificationComponent {
  notifyForm!:FormGroup;
  notiydetails:any
  constructor(private _rf:FormBuilder,private snackBar: MatSnackBar,private reg:UsersService,private router:Router,){
    this.notifyForm = this._rf.group({
      NotificationName:"",
      Description:"",
      "UserID":"1000"
    })
  }
  notifySubmit(){
    const data = this.notifyForm.value;
    this.reg.savenotification(data).subscribe((res)=>{
      this.notiydetails=res;
      console.log(res)
    })
  }
}
