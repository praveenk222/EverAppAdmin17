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
  rowsPerPage: number = 10;
  totalRecords: number = 100; 
  first:number=0;
  rows:number=5;
  constructor(private dialog:MatDialog,private _nd:UsersService) {
    // this.openDialog()
    this.getNotification()
   }
 
   openDialog() {
     const timeout = 2000;
     const dialogRef =
     this.dialog.open(DialogaddNotificationComponent,{
       width:'400px',
       height:'400px'
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

   onPageChange(event: any) {
    // Handle pagination logic, e.g., fetch data for the new page
    console.log('Page changed:', event);
  }
   
}
