import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentMatUploadComponent } from '../../commonFiles/sharedcomponents/dialog_content_Mat_Upload/dialog-content-mat-upload.component';
import { SampleModel } from '../../models/product.model';
import { InventoryService } from '../../services/Inventory.service';
import { PostResult } from '../../models/PostResult';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-addbikes',
  templateUrl: './addbikes.component.html',
  styleUrl: './addbikes.component.css'
})
export class AddbikesComponent {
  proudctdata = new SampleModel();
  isIamages: boolean = false;
  hubList: any;
  LookupData: any;
  constructor(private dialog: MatDialog, private invntservice: InventoryService
    ,private shareds:SubjectService
    ) {
    this.shareds.fetchLookup(); // Fetch data if null
    this.shareds.Lookupdata$.subscribe(data => {
      this.LookupData=data;
      console.log(this.LookupData)
    });
    this.shareds.fetchMasterData(); // Fetch data if null
    this.shareds.data$.subscribe(data => {
     this.hubList=data;
     console.log(this.hubList)
    });
  }

  openDialog() {
    const timeout = 2000;
    let dialogRef =
      this.dialog.open(DialogContentMatUploadComponent, {
        width: '520px',
        height: '558px'
      })
    dialogRef.afterOpened().subscribe(_ => {
      //dialogRef.close();
    })
  }
  onSubmit() {
    console.log(this.proudctdata)
    this.proudctdata.ProductType=3502
    this.invntservice.saveProduct(this.proudctdata)
      .then((result: PostResult) => {
        if (result.status) {
          console.log(result.message)
          // this.router.na
          window.history.back();

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
