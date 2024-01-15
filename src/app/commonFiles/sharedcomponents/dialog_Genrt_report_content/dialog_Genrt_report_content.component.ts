import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-report',
  templateUrl: './dialog_Genrt_report_content.component.html',
  styleUrl: './dialog_Genrt_report_content.component.css'
})
export class DialogContentReportComponent {
  constructor(private dialogRef: MatDialogRef<DialogContentReportComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}