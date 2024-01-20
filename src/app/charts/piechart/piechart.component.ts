import { Component } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css'
})
export class PiechartComponent {
 constructor(){ }
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
