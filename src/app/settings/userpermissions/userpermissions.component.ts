import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-userpermissions',
  templateUrl: './userpermissions.component.html',
  styleUrl: './userpermissions.component.css'
})
export class UserpermissionsComponent implements OnInit {
  userdata: any;
  displayedColumns: string[] = ['Customer id', 'Full name', 'Mobile no.', 'Email id',  'Status', ];
  dataSource = new MatTableDataSource<any>([]);
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route:Router,private us:UsersService){}

 
  ngOnInit(){
    this.getUsers()
  }
  getUsers() {
   this.us.getadminUsers().subscribe((res:any)=>{
    if(res.status){

      this.dataSource = new MatTableDataSource<any>(res.message);
      this.dataSource.paginator = this.paginator;
    }
    
   })
  }
}


