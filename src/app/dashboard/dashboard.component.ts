import { Component, inject } from '@angular/core';
import { DialogPopupService } from '../commonFiles/commonServices/dialogPopup.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentMatComponent } from '../commonFiles/sharedcomponents/dialog_content_Mat/dialog-content-mat.component';
import { DialogContenterrorComponent } from '../commonFiles/sharedcomponents/dialog_content_error/dialog_content_error.component';
import { DialogContentReportComponent } from '../commonFiles/sharedcomponents/dialog_Genrt_report_content/dialog_Genrt_report_content.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { Chart, ChartDataset, ChartOptions, Color } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // constructor(private dialogService: DialogPopupService) {
  constructor(private dialog:MatDialog) {
   // this.openDialog();
   
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
          { title: 'Total vehicles',content:'3,500', cols: 4, rows: 1,color:'lightgreen' ,icon:'card_travel'},
          { title: 'Total bookings',content:'1,000', cols: 4, rows: 1,color:'lightblue',icon:'card_travel' },
          { title: '',content:'', cols: 4, rows: 4,color:'white',icon:'card_travel' ,chart:'barChartData',label:'barChartLabels'},
          { title: 'Available',content:'400', cols: 4, rows: 1,color:'#F5B7B1',icon:'card_travel' },
          { title: 'Total revenue',content:'₹76,100', cols: 4, rows: 1,color:'lightyellow',icon:'card_travel' },
          { title: '' ,content:'', cols: 4, rows: 2,color:'white',icon:'card_travel' },
          { title: '',content:'', cols: 4, rows: 1,color:'white' ,icon:'card_travel'}
        ];
      }

      return [
        { title: 'Total vehicles',content:'3,500', cols: 1, rows: 1,color:'lightgreen' ,icon:'card_travel'},
        { title: 'Total bookings',content:'1,000', cols: 1, rows: 1,color:'lightblue',icon:'card_travel' },
        { title: '',content:'', cols: 2, rows: 2,color:'white',icon:'card_travel',chart:'barChartData' ,label:'barChartLabels'},
        { title: 'Available',content:'400', cols: 1, rows: 1,color:'#F5B7B1',icon:'card_travel' },
        { title: 'Total revenue',content:'₹76,100', cols: 1, rows: 1,color:'lightyellow',icon:'card_travel' },
        { title: '',content:'', cols: 2.5, rows: 2,color:'white',icon:'card_travel' },
        { title: '',content:'', cols: 1, rows: 2,color:'white',icon:'card_travel' }
      ];
    })
  );
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

 
}
