import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhubsComponent } from './addhubs.component';

describe('AddhubsComponent', () => {
  let component: AddhubsComponent;
  let fixture: ComponentFixture<AddhubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddhubsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddhubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
