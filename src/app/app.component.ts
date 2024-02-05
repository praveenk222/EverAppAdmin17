import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
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
constructor(private breakpointObserver: BreakpointObserver,){
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
  
}
