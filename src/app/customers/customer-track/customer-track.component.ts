import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, catchError, interval, map, of, timer } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-customer-track',
  templateUrl: './customer-track.component.html',
  styleUrl: './customer-track.component.css'
})
export class CustomerTrackComponent implements OnInit{
  show=false;
  private subscription!: Subscription;

  public dateNow = new Date();
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  public dDay = new Date('Dec 24 2023 00:00:00');
  public timeDifference:any;
  public secondsToDday:any;
  public minutesToDday:any;
  public hoursToDday:any;
  public daysToDday:any;
  dateDifference:any;
  countDown!: Subscription;
  countDown$!: Observable<any>;
  counter = 0;
  tick = 300; //(interval for the timer in (Milliseconds))
 bookingNo:any=null;
 ProductDetails:any;
 orderdid:any;
 @ViewChild("map", { static: true }) mapElement: any;

  constructor(private os:UsersService,private a_router:ActivatedRoute,httpClient: HttpClient) {
    let id=a_router.snapshot.params['ID']
    this.getDetails(id);
    // this.storage.getuser().then(res => {
    //   if (res !== null) {

    //     let data = res;
    //     const id = res.UserID;
    //     this.getDetails(id);
    //   }
    // })

    // this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A', 'callback')
    // .pipe(
    //   map(() => true),
    //   catchError(() => of(false)),
    // );

    }

 
    
  private getTimeDifference (s_dat:any,e_dat:any) {
    const date1: Date = new Date(s_dat);
    const date2: Date = new Date(e_dat);
      this.timeDifference =  date1.getTime() - date2.getTime()
      console.log(this.timeDifference)
      this.allocateTimeUnits(this.timeDifference);
  }
  
    private allocateTimeUnits (timeDifference:any) {
     this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
     this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
     this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }
  

  apiLoaded: Observable<boolean>;


  

  getDetails(id:any) {
    this.os.getordersummeryByBookingNo(id).subscribe((res: any) => {
      console.log(res)
      this.ProductDetails = res;
      if (res) {
        this.showCounter();
  
        //this.getTimeDifference(res.BookingStartDate, res.BookingEndDate)
      }
     // else{
        // this.router.navigateByUrl('/my-booking')
     // }
  
    })
  }
  // getDetails(id:number) {
  //   this._pd.getUserCurrentBooking(id).subscribe((res: any) => {
  //     console.log(res)
  //     this.ProductDetails = res;
  //     if (res) {
  //       this.showCounter();
  
  //       this.getTimeDifference(res.BookingStartDate, res.BookingEndDate)
  //     }
  //     else{
  //       this.router.navigateByUrl('/my-booking')
  //     }
  
  //   })
  // }
 
  showCounter(){
    let dateObject:any = new Date(this.ProductDetails.BookingStartDate);
    let dateObject2:any = new Date(this.ProductDetails.BookingEndDate);
    console.log(dateObject.getTime())
    console.log(dateObject2.getTime())
    this.counter = Math.floor((dateObject2.getTime()- dateObject.getTime()) / 1000);

    // Using the timer function to create an observable that decrements the counter value at a fixed interval
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);

    // Using the interval function to create an observable that emits values at a fixed interval
    this.countDown$ = interval(1000).pipe(
      map(() => {
        // Calculating the remaining time in seconds
        return Math.floor(
          (dateObject.getTime()- dateObject2.getTime()) / 1000
        );
      })
    );
  }

  // display: any;
  // center: google.maps.LatLngLiteral = {
  //   lat: 17.3840,
  //   lng: 78.456,
  // };
  // zoom = 10;
  // moveMap(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) {this.center = event.latLng.toJSON()
  //   console.log(this.center)
  //   };
  // }
  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null){this.display = event.latLng.toJSON()};
  // }
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;

  zoom = 12;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }
  markers = [  { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 }]  as  any;
  infoContent = ''

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  zoomIn() {
    if (this.zoom < this.maxZoom) this.zoom++;
    console.log('Get Zoom',this.map.getZoom());
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  eventHandler(event: any ,name:string){
    console.log(event,name);
    
    // Add marker on double click event
    if(name === 'mapDblclick'){
      this.dropMarker(event)
    }
  }

  // Markers
  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  dropMarker(event:any) {
    this.markers.push({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      label: {
        color: 'blue',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }


  
}
