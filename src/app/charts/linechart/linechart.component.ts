import { Component } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.css'
})
export class LinechartComponent {
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
}
