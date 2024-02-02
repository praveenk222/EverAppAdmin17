import { ChangeDetectorRef, Component, EventEmitter, Output, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-nav-list ',
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


    menu=[
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
mobileQuery: MediaQueryList;

constructor(private auth:AuthService,private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
  //console.log(this.auth.isLoggedIn)
   // Subscribe to the isLoggedIn observable to observe changes in login status
  //  this.auth.isLoggedIn().subscribe((status) => {
  //   this.isLoggedIn = status;
  // });
  this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
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
private _mobileQueryListener: () => void;

@Output() closeSideNav = new EventEmitter();

onToggleClose() {
  this.closeSideNav.emit();
}

ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
}
}
