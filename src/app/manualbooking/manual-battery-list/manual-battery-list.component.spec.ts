import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBatteryListComponent } from './manual-battery-list.component';

describe('ManualBatteryListComponent', () => {
  let component: ManualBatteryListComponent;
  let fixture: ComponentFixture<ManualBatteryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualBatteryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBatteryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
