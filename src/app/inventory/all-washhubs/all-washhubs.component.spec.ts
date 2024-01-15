import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWashhubsComponent } from './all-washhubs.component';

describe('AllWashhubsComponent', () => {
  let component: AllWashhubsComponent;
  let fixture: ComponentFixture<AllWashhubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllWashhubsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllWashhubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
