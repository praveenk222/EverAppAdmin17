import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBattriesComponent } from './all-battries.component';

describe('AllBattriesComponent', () => {
  let component: AllBattriesComponent;
  let fixture: ComponentFixture<AllBattriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBattriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllBattriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
