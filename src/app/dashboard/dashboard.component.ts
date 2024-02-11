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
          { title: 'Total vehicles',content:this.TotalVehicles, cols: 4, rows: 1,color:'lightgreen' ,icon:'card_travel',visible:'none',linevisible:'none',barvisible:'none'},
          { title: 'Total bookings',content:this.TotalBookings, cols: 4, rows: 1,color:'lightblue',icon:'card_travel',visible:'none',linevisible:'none',barvisible:'none' },
          { title: '',content:'', cols: 4, rows: 4,color:'white',icon:'' ,label:'barChartLabels',visible:'block',linevisible:'none',barvisible:'none'},
          { title: 'Available',content:this.TotalAvilable, cols: 4, rows: 1,color:'#F5B7B1',icon:'card_travel' ,visible:'none',linevisible:'none',barvisible:'none'},
          { title: 'Total revenue',content:this.TotalAMount, cols: 4, rows: 1,color:'lightyellow',icon:'card_travel',visible:'none',linevisible:'none',barvisible:'none' },
          { title: '' ,content:'', cols: 2, rows: 2,color:'white',icon:'card_travel',bar:'barchart_material',visible:'none',linevisible:'block' },
          { title: '',content:'', cols: 2, rows: 2,color:'white' ,icon:'card_travel',visible:'none',linevisible:'none',barvisible:'block'}
        ];
      }

      return [
        { title: 'Total vehicles',content:this.TotalVehicles, cols: 1, rows: 1,color:'lightgreen' ,icon:'card_travel',visible:'none',linevisible:'none',barvisible:'none'},
        { title: 'Total bookings',content:this.TotalBookings, cols: 1, rows: 1,color:'lightblue',icon:'card_travel' ,visible:'none',linevisible:'none',barvisible:'none'},
        { title: '',content:'', cols: 2, rows: 2,color:'white',icon:'' ,label:'barChartLabels',visible:'block',linevisible:'none',barvisible:'none'},
        { title: 'Available',content:this.TotalAvilable, cols: 1, rows: 1,color:'#F5B7B1',icon:'card_travel' ,visible:'none',linevisible:'none',barvisible:'none'},
        { title: 'Total revenue',content:this.TotalAMount, cols: 1, rows: 1,color:'lightyellow',icon:'card_travel',visible:'none',linevisible:'none',barvisible:'none' },
        { title: '',content:'', cols: 2, rows: 2,color:'white',icon:'card_travel' ,bar:'barchart_material',visible:'none',linevisible:'block',barvisible:'none' },
        { title: '',content:'', cols: 2, rows: 2,color:'white',icon:'card_travel' ,visible:'none',linevisible:'none',barvisible:'block'}
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
lineChartData={
  labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  datasets:[
    {
      data:[0,80,70,60,50],
      label:'Sales Precent',
      fill:false,
      tension:0.1,
      borderColor:'red',
      backgroundColor:'red',
    },
    {
      data:[0,60,40,30,10],
      label:'Sales',
      fill:false,
      tension:0.1,
      borderColor:'blue',
    },
  ]
}

lists=[
  {name:'This month'},
  {name:'last 1 week'},
  {name:'last 1 month'},
  {name:'last 4 months'},
  {name:'last 6 months'},
  {name:'last 1 year'}
]
}
