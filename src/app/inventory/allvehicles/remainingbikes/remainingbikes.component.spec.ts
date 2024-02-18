import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingbikesComponent } from './remainingbikes.component';

describe('RemainingbikesComponent', () => {
  let component: RemainingbikesComponent;
  let fixture: ComponentFixture<RemainingbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemainingbikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemainingbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
