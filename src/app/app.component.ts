import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EverAdminPanel';
  private sidenav: MatSidenav;

  public isMenuOpen = true;
constructor(private breakpointObserver: BreakpointObserver,private overlay:OverlayContainer){
  this.isMenuOpen = false;
}
  get isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }
  ngDoCheck() {
    if (this.isHandset) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }      
}
ngOnInit() {
  this.toggleControl.valueChanges.subscribe(
    (darkMode:any)=>{
      this.className= darkMode ? this.darkClassName : this.lightClassName;
      if(darkMode){
        this.overlay.getContainerElement().classList.add(this.darkClassName);

      }else{
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
      }

    }
  )
}
toggleControl = new FormControl(false);
@HostBinding('class')  className = '';
darkClassName = 'theme-dark';
lightClassName = 'theme-light';
}
