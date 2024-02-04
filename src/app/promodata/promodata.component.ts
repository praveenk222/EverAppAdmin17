import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPromocodeComponent } from '../commonFiles/sharedcomponents/dialog-add-promocode/dialog-add-promocode.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-promodata',
  templateUrl: './promodata.component.html',
  styleUrl: './promodata.component.css'
})
export class PromodataComponent  {
  constructor(private dialog:MatDialog,private os:UsersService){
    this.getAll()
  }
 notifyData:any;

  openReport() {
    const dialogRef =
    this.dialog.open(DialogAddPromocodeComponent,{
      width:'560px',
      height:'600px'
    })
    dialogRef.afterOpened().subscribe(_ => {
      
    })
  
  }
  // notifyData=[
  //   {percentage:'20% Off',message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",color:'lightblue'},
  //   {percentage:'20% Off',message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",color:'lightblue'},
  //   {percentage:'20% Off',message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",color:'lightgreen'},
  //   {percentage:'20% Off',message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",color:'red'}

  // ]

  getAll(){
    this.os.getAlloffers().subscribe(res=>{
      console.log(res)
      this.notifyData=res;
    })

  }
  delete(){
    this.os.deletePromo(this.notifyData).subscribe((res)=>{
      
    })
  }
}
