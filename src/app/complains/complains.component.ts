import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrl: './complains.component.css'
})
export class ComplainsComponent {
  complainsData:any;
  displayedColumns: string[] = ['Booking id', 'User name', 'Mobile no.', 'Booking Date', 'Station Location', 'Wash time','Fare','Status','Reviews & ratings'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
constructor(private us:UsersService,private dialog:MatDialog){
this.complains()
}

 complains(){
  this.us.getComplainsList().subscribe((res)=>{
   
    this.complainsData = res;

   console.log(res)
  })
 }

 openReport() {
  const dialogRef =
  this.dialog.open(AddTicketComponent,{
    width:'560px',
    height:'600px',
   
  })
  dialogRef.afterOpened().subscribe(_ => {
    
  })

}
changePage(pageEvent: PageEvent) {
  const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
  const endIndex = startIndex + pageEvent.pageSize;
}
}
