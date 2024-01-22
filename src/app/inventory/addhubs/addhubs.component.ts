import { Component } from '@angular/core';
import { DialogAddhubMatComponent } from '../../commonFiles/sharedcomponents/dialog_addhub_Mat/dialog_addhub_Mat.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addhubs',
  templateUrl: './addhubs.component.html',
  styleUrl: './addhubs.component.css'
})
export class AddhubsComponent {
  constructor(private dialog:MatDialog) {
    // this.openDialog()
   }
 

  }