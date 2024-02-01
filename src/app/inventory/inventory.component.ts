// import { AfterViewInit, Component, ViewChild } from '@angular/core';
// import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { InventoryService } from '../services/Inventory.service';
// import { PostResult } from '../models/PostResult';
// import { MatDialog } from '@angular/material/dialog';
// import { AddhubsComponent } from './addhubs/addhubs.component';
// @Component({
//   selector: 'app-inventory',
//   templateUrl: './inventory.component.html',
//   styleUrl: './inventory.component.css'
// })
// export class InventoryComponent {
//   displayedColumns: string[] = ['slno', 'hubname', 'registrationno', 'hubcode', 'opnetime', 'closetime', 'location', 'status'];
  
//   proudctdata: any;
//   isIamages: boolean = false;
//   dataSource = new MatTableDataSource<any>([]);
//   pageSizeOptions: number[] = [5, 10, 20];
//   pageSize = 5; 
//   @ViewChild(MatPaginator) paginator: MatPaginator; 
  
//   constructor(private invntservice: InventoryService, public dialog: MatDialog) {
//   }

//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//     this.getbikes();
//   }
//   getbikes() {
//     let p_type: any = 3502
//     this.invntservice.getProducts(p_type)
//       .then((result: PostResult) => {
//         if (result.status) {
//           console.log(result.message)
//           this.dataSource.data = result.message;
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
//   openDialog() {
//     this.dialog.open(AddhubsComponent, {
//       width: '600px',
//       height: '460px'
//     }
//     );
//   }
// }

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InventoryService } from '../services/Inventory.service';
import { PostResult } from '../models/PostResult';
import { MatDialog } from '@angular/material/dialog';
import { AddhubsComponent } from './addhubs/addhubs.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'] // Fix the property name to styleUrls
})
export class InventoryComponent {
  displayedColumns: string[] = ['slno', 'hubname', 'registrationno', 'hubcode', 'opnetime', 'closetime', 'location', 'status'];

  proudctdata: any;
  isIamages: boolean = false;
  dataSource = new MatTableDataSource<any>([]);
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private invntservice: InventoryService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getbikes();
  }

 async getbikes() {
    let p_type: any = 3502;
    this.invntservice.getProducts(p_type)
      .then((result: PostResult) => {
        if (result.status) {
          console.log(result.message);
          this.dataSource = new MatTableDataSource<any>(result.message);
          this.dataSource.paginator = this.paginator;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  openDialog() {
        this.dialog.open(AddhubsComponent, {
          width: '600px',
          height: '460px'
        }
        );
      }
}



