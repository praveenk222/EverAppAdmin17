import { Component, inject } from '@angular/core';
import { DialogPopupService } from '../commonFiles/commonServices/dialogPopup.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentMatComponent } from '../commonFiles/sharedcomponents/dialog_content_Mat/dialog-content-mat.component';
import { DialogContenterrorComponent } from '../commonFiles/sharedcomponents/dialog_content_error/dialog_content_error.component';
import { DialogContentReportComponent } from '../commonFiles/sharedcomponents/dialog_Genrt_report_content/dialog_Genrt_report_content.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';

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

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 4, rows: 1,color:'lightgreen' },
          { title: 'Card 2', cols: 4, rows: 1,color:'lightblue' },
          { title: 'Card 3', cols: 4, rows: 4,color:'white' },
          { title: 'Card 4', cols: 4, rows: 1,color:'lightred' },
          { title: 'Card 3', cols: 4, rows: 1,color:'lightyellow' },
          { title: 'Card 4', cols: 4, rows: 2,color:'lightgreen' },
          { title: 'Card 4', cols: 4, rows: 1,color:'lightgreen' }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1,color:'lightgreen' },
        { title: 'Card 2', cols: 1, rows: 1,color:'lightblue' },
        { title: 'Card 3', cols: 2, rows: 2,color:'white' },
        { title: 'Card 4', cols: 1, rows: 1,color:'lightred' },
        { title: 'Card 3', cols: 1, rows: 1,color:'lightyellow' },
        { title: 'Card 4', cols: 2.5, rows: 2,color:'lightgreen' },
        { title: 'Card 4', cols: 1, rows: 2,color:'lightgreen' }
      ];
    })
  );
}
