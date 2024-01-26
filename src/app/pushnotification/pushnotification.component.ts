import { Component } from '@angular/core';
import { DialogaddNotificationComponent } from '../commonFiles/sharedcomponents/dialogadd-notification/dialogadd-notification.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pushnotification',
  templateUrl: './pushnotification.component.html',
  styleUrl: './pushnotification.component.css'
})
export class PushnotificationComponent {
  constructor(private dialog:MatDialog) {
    // this.openDialog()
   }
 
   openDialog() {
     const timeout = 2000;
     const dialogRef =
     this.dialog.open(DialogaddNotificationComponent,{
       width:'520px',
       height:'358px'
     })
     dialogRef.afterOpened().subscribe(_ => {
       setTimeout(() => {
          dialogRef.close();
       }, timeout)
     })
   
   }
}
