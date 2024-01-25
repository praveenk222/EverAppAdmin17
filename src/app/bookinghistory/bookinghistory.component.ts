import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PostResult } from '../models/PostResult';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrl: './bookinghistory.component.css'
})
export class BookinghistoryComponent {
  orderdata:any;
  displayedColumns: string[] = ['Booking id', 'User name', 'Mobile no.', 'Booking Date', 'Station Location', 'Wash time','Fare','Status','Reviews & ratings'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
constructor(private us:UsersService){

}

ngOnInit() {
  let biketype=3506
  this.getOrders(biketype);
}
async getOrders(id:number){

this.us.getOrders(id)
    .then((result:PostResult) => {
      if (result.status) {
        console.log(result.message)
        // this.router.na
        this.dataSource = result.message;
       
      }
    })
    .catch((error) => {
     console.error(error);
    });
}

changePage(pageEvent: PageEvent) {
  const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
  const endIndex = startIndex + pageEvent.pageSize;
}
}