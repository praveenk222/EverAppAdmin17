import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrl: './complains.component.css'
})
export class ComplainsComponent {
  complainsData:any;
constructor(private us:UsersService,private dialog:MatDialog){
this.complains()
}

 complains(){
  this.us.getComplainsList().subscribe((res)=>{
    this.complainsData=res
   console.log(res)
  })
 }

 openReport() {
  const dialogRef =
  this.dialog.open(AddTicketComponent,{
    width:'560px',
    height:'600px',
   
  })
  dialogRef.afterOpened().subscribe(_ => {
    
  })

}
}
