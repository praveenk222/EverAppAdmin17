import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvrentalDetailsComponent } from './evrental-details.component';

describe('EvrentalDetailsComponent', () => {
  let component: EvrentalDetailsComponent;
  let fixture: ComponentFixture<EvrentalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvrentalDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvrentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
