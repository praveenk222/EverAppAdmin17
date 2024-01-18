import { Component } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css'
})
export class BarchartComponent {
  barChartData={
    labels:["sun","mon","tue","wed","thu"],
    datasets:[
      {
        data:[90,80,70,60,50],
        label:'Sales Precent',
        fail:true
      }
    ]
  }
}
