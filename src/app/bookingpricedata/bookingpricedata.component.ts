import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PostResult } from '../models/PostResult';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AddpricedataComponent } from '../addpricedata/addpricedata.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bookingpricedata',
  templateUrl: './bookingpricedata.component.html',
  styleUrl: './bookingpricedata.component.css'
})
export class BookingpricedataComponent {
  orderdata:any;
  displayedColumns: string[] = ['Booking id', 'User name',  'Fare','Status'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
constructor(private us:UsersService,private dialog:MatDialog){

}

ngOnInit() {
  let biketype=3506
  this.getOrders(biketype);
}
async getOrders(id:number){

this.us.getPridcedata()
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


openReport() {
  const dialogRef =
  this.dialog.open(AddpricedataComponent,{
    width:'560px',
    height:'600px',
  
  })


}
}
