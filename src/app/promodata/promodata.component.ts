import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPromocodeComponent } from '../commonFiles/sharedcomponents/dialog-add-promocode/dialog-add-promocode.component';
import { UsersService } from '../services/users.service';
import { PostResult } from '../models/PostResult';
import Swal from 'sweetalert2';
import { SweetAlertServiceService } from '../services/sweet-alert-service.service';

@Component({
  selector: 'app-promodata',
  templateUrl: './promodata.component.html',
  styleUrl: './promodata.component.css'
})
export class PromodataComponent  {

  constructor(private dialog:MatDialog,private os:UsersService,private sweetAlertService: SweetAlertServiceService){
    this.getAll()
  }
 notifyData:any;

  openReport(data:any) {
    const dialogRef =
    this.dialog.open(DialogAddPromocodeComponent,{
      width:'560px',
      height:'600px',
      data:null
    })
    dialogRef.afterOpened().subscribe(_ => {
      
    })
  
  }


  getAll(){
    this.os.getAlloffers().subscribe(res=>{
      console.log(res)
      this.notifyData=res;
    })

  }
  async delete(ID1:number,ID2:number){
    const confirmed = await this.sweetAlertService.showConfirmation('Are you sure?', 'do you want to remove record!');
    
    if (confirmed) {
      this.os.deletePromo(ID1,ID2).subscribe((res:any)=>{
           if(res.status){
                 this.getAll()
           }
      })
    } else {
    }
  }
edit(data:any){
  const dialogRef =this.dialog.open(DialogAddPromocodeComponent,{
    width:'560px',
    height:'600px',
    data:data,
  })
  dialogRef.afterOpened().subscribe(_ => {
    
  })
}
  async showConfirmation() {
    const confirmed = await this.sweetAlertService.showConfirmation('Are you sure?', 'This action cannot be undone!');
    
    if (confirmed) {
      // User clicked 'Yes, proceed!'
      console.log('Proceed with the action.');
    } else {
      // User clicked 'No, cancel!' or closed the modal
      console.log('Cancelled the action.');
    }
  }
}
