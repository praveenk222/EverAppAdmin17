import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {
  showHead: boolean=false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });
    }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    menu=[
  
      {name:'Dashboard',icon:'home',link:'/dashboard',},
      {name:'Booking history',icon:'bookmark',link:'/bookinghistory'},
      {name:'Revenue',icon:'attach_money',link:'/revenue'},
      {name:'Manual booking',icon:'work',link:'/manualbooking'},
      {name:'Inventory',icon:'invert_colors',link:'/inventory'},
      {name:'Booking Rates & price management',icon:'insert_chart',link:'/bookingpricedata'},
      {name:'Manage customers',icon:'supervised_user_circle',link:'/customers'},
      {name:'Promo codes',icon:'local_offer',link:'/promodata'},
      {name:'Push notifications',icon:'notification_important',link:'/pushnotification'},
      {name:'Complains',icon:'markunread_mailbox',link:'/complains'},
    
    ]



}
