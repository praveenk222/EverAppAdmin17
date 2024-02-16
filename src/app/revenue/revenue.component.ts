import { Component } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

lists=[
  {name:'This month'},
  {name:'last 1 week'},
  {name:'last 1 month'},
  {name:'last 4 months'},
  {name:'last 6 months'},
  {name:'last 1 year'}
]
  selectedItem: any;
constructor(private shareds:SubjectService,
  // private activroute:ActivatedRoute
  ){
 // to check resolve data enable acitveted route

}
onItemSelected(item: any) {
  this.selectedItem = item;
  console.log(this.selectedItem)
}
ngOnInit()
{
  // let data=this.activroute.snapshot.data['data']
  // console.log(data)

  // console.log(this.shareds.getData())
  // if (!this.shareds.getData()) { // Check if data is null
  // }
  this.shareds.fetchMasterData(); // Fetch data if null
  this.shareds.data$.subscribe(data => {
    console.log('revenue data',data)
  });
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
lineChartData={
  labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  datasets:[
    {
      data:[0,80,70,60,50],
      label:'Sales Precent',
      fill:false,
      tension:0.1,
      borderColor:'red',
      backgroundColor:'red',
    },
    {
      data:[0,60,40,30,10],
      label:'Sales',
      fill:false,
      tension:0.1,
      borderColor:'blue',
    },
  ]
}

pieChartData={
  labels:["sun","mon","tue","wed","thu"],
  datasets:[
    {
      data:[90,80,70,60,50],
      label:'Sales Precent',
      backgrounColor:'white'
    }
  ]
}
pieChartOption={
  responsive:false
}
}
