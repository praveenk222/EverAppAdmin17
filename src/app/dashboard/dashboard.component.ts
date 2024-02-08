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
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dashboardData:any=[];
  TotalVehicles: any=0;
  TotalAMount: any=0;
  TotalBookings: any=0;
  TotalAvilable: any=0;
  // constructor(private dialogService: DialogPopupService) {
  constructor(private dialog:MatDialog,private us:UsersService) {
   // this.openDialog();
   this.getdasboarData()
  }
ngOnInit(){
  
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
          { title: 'Total vehicles',content:this.TotalVehicles, cols: 4, rows: 1,color:'lightgreen' ,icon:'card_travel'},
          { title: 'Total bookings',content:this.TotalBookings, cols: 4, rows: 1,color:'lightblue',icon:'card_travel' },
          { title: '',content:'', cols: 4, rows: 4,color:'white',icon:'card_travel' ,chart:'barChartData',label:'barChartLabels'},
          { title: 'Available',content:this.TotalAvilable, cols: 4, rows: 1,color:'#F5B7B1',icon:'card_travel' },
          { title: 'Total revenue',content:this.TotalAMount, cols: 4, rows: 1,color:'lightyellow',icon:'card_travel' },
          { title: '' ,content:'', cols: 4, rows: 2,color:'white',icon:'card_travel' },
          { title: '',content:'', cols: 4, rows: 1,color:'white' ,icon:'card_travel'}
        ];
      }

      return [
        { title: 'Total vehicles',content:this.TotalVehicles, cols: 1, rows: 1,color:'lightgreen' ,icon:'card_travel'},
        { title: 'Total bookings',content:this.TotalBookings, cols: 1, rows: 1,color:'lightblue',icon:'card_travel' },
        { title: '',content:'', cols: 2, rows: 2,color:'white',icon:'card_travel',chart:'barChartData' ,label:'barChartLabels'},
        { title: 'Available',content:this.TotalAvilable, cols: 1, rows: 1,color:'#F5B7B1',icon:'card_travel' },
        { title: 'Total revenue',content:this.TotalAMount, cols: 1, rows: 1,color:'lightyellow',icon:'card_travel' },
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
getdasboarData(){
  this.us.getdasboarddata().subscribe((res:any)=>{
    console.log(res)
    if(res){

      this.dashboardData=res;
      this.TotalVehicles=this.dashboardData[0].TotalProducts;
      this.TotalAMount=this.dashboardData[0].TotalBookingAmount;
      this.TotalAvilable=this.dashboardData[0].TotalAvilable;
      this.TotalBookings=this.dashboardData[0].CanceledBookings;
      console.log(this.cards)
      this.cards
    }
  })
}
 
}
