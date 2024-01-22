import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchModal } from '../../../models/product.model';

@Component({
  selector: 'app-dialog-addhub-mat',
  templateUrl: './dialog_addhub_Mat.component.html',
  styleUrl: './dialog_addhub_Mat.component.css'
})
export class DialogAddhubMatComponent {
 hubmodal!: BranchModal ;
  constructor(private dialogRef: MatDialogRef<DialogAddhubMatComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}