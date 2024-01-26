import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPromocodeComponent } from '../commonFiles/sharedcomponents/dialog-add-promocode/dialog-add-promocode.component';

@Component({
  selector: 'app-promodata',
  templateUrl: './promodata.component.html',
  styleUrl: './promodata.component.css'
})
export class PromodataComponent  {
  constructor(private dialog:MatDialog){}
 

  openReport() {
    const dialogRef =
    this.dialog.open(DialogAddPromocodeComponent,{
      width:'350px',
      height:'340px'
    })
    dialogRef.afterOpened().subscribe(_ => {
      
    })
  
  }
}
