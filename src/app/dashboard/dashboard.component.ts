import { Component } from '@angular/core';
import { DialogPopupService } from '../commonFiles/commonServices/dialogPopup.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentMatComponent } from '../commonFiles/sharedcomponents/dialog_content_Mat/dialog-content-mat.component';
import { DialogContenterrorComponent } from '../commonFiles/sharedcomponents/dialog_content_error/dialog_content_error.component';
import { DialogContentReportComponent } from '../commonFiles/sharedcomponents/dialog_Genrt_report_content/dialog_Genrt_report_content.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // constructor(private dialogService: DialogPopupService) {
  constructor(private dialog:MatDialog) {
   // this.openDialog()
  }

  openDialog() {
    const timeout = 2000;
    const dialogRef =
    this.dialog.open(DialogContentMatComponent,{
      width:'520px',
      height:'358px'
    })
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
         dialogRef.close();
      }, timeout)
    })
  
  }
  openReport() {
    const dialogRef =
    this.dialog.open(DialogContentReportComponent,{
      width:'350px',
      height:'340px'
    })
    dialogRef.afterOpened().subscribe(_ => {
      
    })
  
  }
  openerrorDialog() {
    const timeout = 2000;
    const dialogRef =
    this.dialog.open(DialogContenterrorComponent,{
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
