import { Component, ViewChild } from '@angular/core';
import { InventoryService } from '../../services/Inventory.service';
import { PostResult } from '../../models/PostResult';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recent-hubs',
  templateUrl: './recent-hubs.component.html',
  styleUrl: './recent-hubs.component.css'
})
export class RecentHubsComponent {

  proudctdata: any;
  isIamages: boolean = false;
  displayedColumns: string[] = ['slno', 'productname', 'registrationno', 'hubcode', 'opnetime', 'closetime', 'location', 'status'];
  dataSource = new MatTableDataSource<any>();
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private invntservice: InventoryService) {
  }

  ngOnInit() {
    this.getbikes();
  }
  changePage(pageEvent: PageEvent) {
    const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
    const endIndex = startIndex + pageEvent.pageSize;
  }
  ngAfterViewInit() {
    // this.dataSource.paginator=this.paginator;
  }
  getbikes() {
    this.invntservice.getHubs()
      .then((result: PostResult) => {
        if (result.status) {
          console.log(result.message)
          // this.router.na
          this.dataSource = result.message;
          this.dataSource.paginator = this.paginator;

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
