import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SharedsameApiDataService } from '../services/sharedsame-api-data.service';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrl: './complains.component.css'
})
export class ComplainsComponent {
  complainsData:any;
  displayedColumns: string[] = ['Customer id', 'Full name', 'Mobile no.', 'Email id', 'Registration date','ClosedDate', 'Status', ];
  dataSource = new MatTableDataSource<any>([]);
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  response: any;
constructor(private us:UsersService,private dialog:MatDialog,private shareds:SharedsameApiDataService){
this.complains();
this.response=this.shareds.getHubList()
this.getHubList();
this.getHubList();
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

// search
applyFilter(event: Event) {debugger
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
