import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbhulistComponent } from './allbhulist.component';

describe('AllbhulistComponent', () => {
  let component: AllbhulistComponent;
  let fixture: ComponentFixture<AllbhulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllbhulistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllbhulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
