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
}
