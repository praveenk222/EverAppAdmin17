import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHubstationComponent } from './all-hubstation.component';

describe('AllHubstationComponent', () => {
  let component: AllHubstationComponent;
  let fixture: ComponentFixture<AllHubstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllHubstationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllHubstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
