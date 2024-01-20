import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-error',
  templateUrl: './dialog_content_error.component.html',
  styleUrl: './dialog_content_error.component.css'
})
export class DialogContenterrorComponent {
  constructor(private dialogRef: MatDialogRef<DialogContenterrorComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}