import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvehiclesComponent } from './allvehicles.component';

describe('AllvehiclesComponent', () => {
  let component: AllvehiclesComponent;
  let fixture: ComponentFixture<AllvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllvehiclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
