import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentMatUploadComponent } from '../../commonFiles/sharedcomponents/dialog_content_Mat_Upload/dialog-content-mat-upload.component';
import { SampleModel } from '../../models/product.model';

@Component({
  selector: 'app-addbikes',
  templateUrl: './addbikes.component.html',
  styleUrl: './addbikes.component.css'
})
export class AddbikesComponent {
proudctdata!:SampleModel
  constructor(private dialog:MatDialog) {
    // this.openDialog()
    this.proudctdata.Battery=23
    this.proudctdata.BranchID=23
    console.log(this.proudctdata)
   }

  openDialog() {
    const timeout = 2000;
    let dialogRef =
    this.dialog.open(DialogContentMatUploadComponent,{
      width:'520px',
      height:'558px'
    })
    dialogRef.afterOpened().subscribe(_ => {
      //dialogRef.close();
    })  
  }

}
