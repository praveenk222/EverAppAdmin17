import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  displayedColumns: string[] = ['slno', 'hubname', 'registrationno', 'hubcode','opnetime','closetime','location','status'];
  dataSource = ELEMENT_DATA;

  constructor(){

  }

}
  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Ola S1 Pro', weight: 12233, symbol: 'H'},
  

  ];
  
 
   