import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualbookingComponent } from './manualbooking.component';

describe('ManualbookingComponent', () => {
  let component: ManualbookingComponent;
  let fixture: ComponentFixture<ManualbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualbookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
