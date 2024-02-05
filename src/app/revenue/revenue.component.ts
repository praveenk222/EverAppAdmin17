import { Component } from '@angular/core';

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
}
