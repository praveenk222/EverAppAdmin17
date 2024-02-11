import { Component } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent {
lists=[
  {name:'This month'},
  {name:'last 1 week'},
  {name:'last 1 month'},
  {name:'last 4 months'},
  {name:'last 6 months'},
  {name:'last 1 year'}
]
constructor(private subjectService:SubjectService){
  this.subjectService.getData().subscribe(data => {
    console.log('test',data);
  });

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
