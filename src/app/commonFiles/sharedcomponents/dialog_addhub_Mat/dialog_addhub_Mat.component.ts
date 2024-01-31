import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchModal } from '../../../models/product.model';
import { InventoryService } from '../../../services/Inventory.service';
import { PostResult } from '../../../models/PostResult';

@Component({
  selector: 'app-dialog-addhub-mat',
  templateUrl: './dialog_addhub_Mat.component.html',
  styleUrl: './dialog_addhub_Mat.component.css'
})
export class DialogAddhubMatComponent {
 hubmodal!: BranchModal ;
  constructor(private dialogRef: MatDialogRef<DialogAddhubMatComponent>,  @Inject(MAT_DIALOG_DATA) public data: any
  ,private i_service:InventoryService) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  saveHub(){
let data={
  "BranchCode": "cc",
  "BranchName": "test",
  "RegNo": "tets",
  "IsActive": true,  // Assuming a default value of true for @IsActive
  "CreatedBy": "test",
  "ModifiedBy": "test",
  "OpenTime": "12:30",  // Replace with the actual time for @OpenTime
  "CloseTime": "10:00", // Replace with the actual time for @CloseTime
  "ProfileImage": "test",
  "BranchType": 0  // Assuming a default value of 0 for @BranchType
}

this.i_service.saveHub(data)
  .then((result: PostResult) => {
    if (result.status) {
      console.log(result.message)
      // this.router.na
    }
  })
  .catch((error) => {
    console.error(error);
  });
  }
}


