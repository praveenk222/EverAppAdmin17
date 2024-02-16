import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedsameApiDataService } from '../services/sharedsame-api-data.service';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrl: './complains.component.css'
})
export class ComplainsComponent {
  start_date:any;
  complainsData:any;
  dateRange:any;
  arrayList:any
  displayedColumns: string[] = ['Customer id', 'Full name', 'Mobile no.', 'Email id', 'Registration date','ClosedDate', 'Status', ];
  dataSource = new MatTableDataSource<any>([]);
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //

  @ViewChild(MatPaginator) paginator: MatPaginator;

  form = new FormGroup({
    fromDate: new FormControl(null, { validators: [Validators.required]}),
    toDate: new FormControl(null, { validators: [Validators.required]})
  });
  response: any;
constructor(private us:UsersService,
  private dialog:MatDialog,private shareds:SubjectService){
this.complains();

}
ngOnInit()
{
  this.shareds.fetchMasterData();
  this.shareds.data$.subscribe(data => {
    console.log('complains data',data)

  });
}
getHubList(){
  this.response.subscribe((res:any)=>{
    console.log(res)
  })

}
 complains(){
  this.us.getComplainsList().subscribe((res:any)=>{
   
 
    this.dataSource = new MatTableDataSource<any>(res);
          this.dataSource.paginator = this.paginator;
   console.log(res)
  })
 }

 openReport() {
  const dialogRef =
  this.dialog.open(AddTicketComponent,{
    width:'540px',
    height:'520px',
   
  })

  dialogRef.afterOpened().subscribe(_ => {
    
  })

}
changePage(pageEvent: PageEvent) {
  const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
  const endIndex = startIndex + pageEvent.pageSize;
}
applyDateFilter() {
  if(this.dateRange.value.start && this.dateRange.value.end){
    this.dataSource.data = this.arrayList;
    console.log("data",this.dataSource.data);
    this.dataSource.data = this.dataSource.data.filter(e=> new Date(e.timestamp).getTime() >= this.dateRange.value.start?.getTime()! && new Date(e.timestamp).getTime() <= this.dateRange.value.end?.getTime()!);
    console.log("filterd",this.dataSource.data);
  }

}
// search
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}