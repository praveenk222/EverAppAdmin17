import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-remainingbikes',
  templateUrl: './remainingbikes.component.html',
  styleUrl: './remainingbikes.component.css'
})
export class RemainingbikesComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}
  // @Input() childData: any; 

  displayedColumns: string[] = ['slno', 'productname', 'registrationno', 'hubcode','opnetime','closetime','location','status'];
   dataSource = new MatTableDataSource<any>([]);
   pageSizeOptions: number[] = [5, 10, 20];
   pageSize = 5; //
   @ViewChild(MatPaginator) paginator!: MatPaginator;
  data: any;
  ngAfterViewInit() {
    // You can now access child component properties/methods here
    console.log('i am view',this.data)
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.data)
    this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges(); // Manually trigger change detection
    }, 1000); 
  }
  loadData(data:any) {
    this.data=data;
    console.log('i am child',data)
    
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(data)
    this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges(); // Manually trigger change detection
    }, 1000); 
  }
  ngOnInit(): void {
    // Simulating asynchronous data fetching
    console.log
   // Simulated delay of 1 second
  }
}
