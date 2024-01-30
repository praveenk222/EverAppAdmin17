import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddthemeComponent } from '../commonFiles/sharedcomponents/addtheme/addtheme.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
isTheme:boolean=false;
constructor(private dialog:MatDialog){

}


  openerrorDialog() {
    const timeout = 2000;
    const dialogRef =
    this.dialog.open(AddthemeComponent,{
      width:'520px',
      height:'358px'
    })
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
         dialogRef.close();
      }, timeout)
    })
  
  }
}
