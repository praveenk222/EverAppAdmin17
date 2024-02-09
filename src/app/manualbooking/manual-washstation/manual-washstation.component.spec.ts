import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualWashstationComponent } from './manual-washstation.component';

describe('ManualWashstationComponent', () => {
  let component: ManualWashstationComponent;
  let fixture: ComponentFixture<ManualWashstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualWashstationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualWashstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
