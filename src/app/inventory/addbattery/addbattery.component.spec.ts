import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbatteryComponent } from './addbattery.component';

describe('AddbatteryComponent', () => {
  let component: AddbatteryComponent;
  let fixture: ComponentFixture<AddbatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddbatteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddbatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
