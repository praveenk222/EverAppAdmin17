import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbikesComponent } from './addbikes.component';

describe('AddbikesComponent', () => {
  let component: AddbikesComponent;
  let fixture: ComponentFixture<AddbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddbikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
