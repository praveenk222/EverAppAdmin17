import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.css'
})
export class PrimengComponent {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
