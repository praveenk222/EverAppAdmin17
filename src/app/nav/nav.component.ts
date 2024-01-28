import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
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
  isLoggedIn:boolean=false;
  showheader:boolean=false;
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

constructor(private auth:AuthService,private router:Router){
  //console.log(this.auth.isLoggedIn)
   // Subscribe to the isLoggedIn observable to observe changes in login status
  //  this.auth.isLoggedIn().subscribe((status) => {
  //   this.isLoggedIn = status;
  // });
  this.router.events.subscribe((val) => {
    if (val instanceof NavigationEnd) {
      if (val.url == "/") {
        this.showheader = false;
      }
      else {
        this.showheader = true;

      }
    }
  });
}

}
