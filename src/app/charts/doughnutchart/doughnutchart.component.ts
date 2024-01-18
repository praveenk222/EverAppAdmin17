import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrl: './doughnutchart.component.css'
})
export class DoughnutchartComponent {
  dougChartData={
    labels:["sun","mon","tue","wed","thu"],
    datasets:[
      {
        data:[90,80,70,60,50],
        label:'Sales Precent',
        backgroundColor:[
          'rgba(255,0,25,0.7)',
          'rgba(0,255,25,0.7)',
          'rgba(0,25,235,0.7)',
          'rgba(255,0,25,0.7)',
          'rgba(67,0,25,0.7)',
        ],
        cutout:"50%"  
      }
    ]
  }
  dougChartOption={
    responsive:false
  }
}
