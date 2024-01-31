import { Component } from '@angular/core';
import { DialogaddNotificationComponent } from '../commonFiles/sharedcomponents/dialogadd-notification/dialogadd-notification.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-pushnotification',
  templateUrl: './pushnotification.component.html',
  styleUrl: './pushnotification.component.css'
})
export class PushnotificationComponent {
  notifydata:any;
  constructor(private dialog:MatDialog,private _nd:UsersService) {
    // this.openDialog()
    this.getNotification()
   }
 
   openDialog() {
     const timeout = 2000;
     const dialogRef =
     this.dialog.open(DialogaddNotificationComponent,{
       width:'520px',
       height:'358px'
     })
     dialogRef.afterOpened().subscribe(_ => {
    
     })
   
   }

   getNotification(){
    this._nd.getnotification().subscribe((res)=>{
      console.log(res)
      this.notifydata=res['data']
    })
   }

   
}
