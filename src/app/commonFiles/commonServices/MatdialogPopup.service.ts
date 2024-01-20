import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogContentComponent } from '../sharedcomponents/dialog-content/dialog-content.component';

@Injectable({
  providedIn: 'root'
})
export class DialogPopupService {

    
  constructor(private primeNgDialogService: DialogService) {}

  openDialog() {
    const ref = this.primeNgDialogService.open(DialogContentComponent, {
      header: 'Dialog Header',
      width: '70%',
      
    });
  }

  // You can add more methods as needed, such as passing data to the dialog.

  closeDialog() {
    // Implement if needed.
  }
}
