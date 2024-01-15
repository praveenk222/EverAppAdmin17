import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-mat',
  templateUrl: './dialog-content-mat.component.html',
  styleUrl: './dialog-content-mat.component.css'
})
export class DialogContentMatComponent {
  constructor(private dialogRef: MatDialogRef<DialogContentMatComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}