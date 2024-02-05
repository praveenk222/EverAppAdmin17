import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  
  // @Input() pageSizeOptions: number[] = [5, 10, 25, 50];
  @Output() pageChange = new EventEmitter<number>();

  pageSizeOptions: number[] = [5];
  pageSize: number = 5;

  pageChanged(event: PageEvent): void {
  }
}
