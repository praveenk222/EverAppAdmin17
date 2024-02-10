import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../../../services/Inventory.service';
import { PostResult } from '../../../models/PostResult';
import { DialogAddhubMatComponent } from '../../../commonFiles/sharedcomponents/dialog_addhub_Mat/dialog_addhub_Mat.component';

@Component({
  selector: 'app-allbhulist',
  templateUrl: './allbhulist.component.html',
  styleUrl: './allbhulist.component.css'
})
export class AllbhulistComponent {

  proudctdata: any;
  isIamages: boolean = false;
  displayedColumns: string[] = ['slno', 'productname', 'registrationno', 'hubcode', 'opnetime', 'closetime', 'location', 'status'];
  dataSource = new MatTableDataSource<any>([]);
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private invntservice: InventoryService,private dialog:MatDialog) {
  }

  ngOnInit() {
    this.getAll();
  }
  changePage(pageEvent: PageEvent) {
    const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
    const endIndex = startIndex + pageEvent.pageSize;
  }
  ngAfterViewInit() {
    // this.dataSource.paginator=this.paginator;
  }
  getAll() {
    this.invntservice.getHubs()
      .then((result: PostResult) => {
        if (result.status) {
          console.log(result.message)
          // this.router.na
          this.dataSource = new MatTableDataSource<any>(result.message)
          this.dataSource.paginator = this.paginator;

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }



  openDialog() {
    const dialogRef =
    this.dialog.open(DialogAddhubMatComponent,{
      width:'490px',
      height:'658px'
    })
    dialogRef.afterClosed().subscribe(_ => {
      setTimeout(() => {
         dialogRef.close();
         this.getAll();
      })
    })
  
  }
}
