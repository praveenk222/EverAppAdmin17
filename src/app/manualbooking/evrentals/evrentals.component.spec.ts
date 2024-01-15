import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvrentalsComponent } from './evrentals.component';

describe('EvrentalsComponent', () => {
  let component: EvrentalsComponent;
  let fixture: ComponentFixture<EvrentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvrentalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvrentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
