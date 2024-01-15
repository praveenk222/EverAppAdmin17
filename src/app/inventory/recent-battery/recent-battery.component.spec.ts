import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBatteryComponent } from './recent-battery.component';

describe('RecentBatteryComponent', () => {
  let component: RecentBatteryComponent;
  let fixture: ComponentFixture<RecentBatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentBatteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
