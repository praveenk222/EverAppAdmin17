import { Component } from '@angular/core';
import { DialogaddNotificationComponent } from '../commonFiles/sharedcomponents/dialogadd-notification/dialogadd-notification.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { SweetAlertServiceService } from '../services/sweet-alert-service.service';

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
  constructor(private dialog:MatDialog,private _nd:UsersService,private sweetAlertService: SweetAlertServiceService) {
    // this.openDialog()
    this.getNotification()
   }
 
   openDialog(type:string,data:any) {
     const timeout = 2000;
     const dialogRef =
     this.dialog.open(DialogaddNotificationComponent,{
       width:'350px',
       height:'400px',
       data:data
     })
     dialogRef.afterOpened().subscribe(_ => {
      
     })
     dialogRef.afterClosed().subscribe(res=>{
      this.getNotification();

     })
   
   }

   getNotification(){
    this._nd.getnotification().subscribe((res)=>{
      console.log(res)
      this.notifydata=res['data']
    })
   }
   async delete(ID:number){alert(ID)
    const confirmed = await this.sweetAlertService.showConfirmation('Are you sure?', 'do you want to remove record!');
    
    if (confirmed) {
      this._nd.deleteNotification(ID).subscribe((res:any)=>{
           if(res.status){
                 this.getNotification()
           }
      })
    } else {
    }
  }

   onPageChange(event: any) {
    // Handle pagination logic, e.g., fetch data for the new page
    console.log('Page changed:', event);
  }
   
}
