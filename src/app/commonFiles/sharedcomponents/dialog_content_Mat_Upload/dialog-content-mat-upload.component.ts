import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-mat-upload',
  templateUrl: './dialog-content-mat-upload.component.html',
  styleUrl: './dialog-content-mat-upload.component.css'
})
export class DialogContentMatUploadComponent {
  constructor(private dialogRef: MatDialogRef<DialogContentMatUploadComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}