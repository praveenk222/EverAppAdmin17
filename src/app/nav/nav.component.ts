import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


Navitem=[
  {name:'Dashboard',icon:'',link:'/dashboard'},
  {name:'Booking history',icon:'',link:'/bookinghistory'},
  {name:'Revenue',icon:'',link:'/revenue'},
  {name:'Manual booking',icon:'',link:'/manualbooking'},
  {name:'Inventory',icon:'',link:'/inventory'},
  {name:'Booking Rates & price management',icon:'',link:'/bookingpricedata'},
  {name:'Manage customers',icon:'',link:'/customers'},
  {name:'Promo codes',icon:'',link:'/promodata'},
  {name:'Push notifications',icon:'',link:'/pushnotification'},
  {name:'Complains',icon:'',link:'/complains'},

]



}
