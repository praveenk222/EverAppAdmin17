import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsDetailsComponent } from './complains-details.component';

describe('ComplainsDetailsComponent', () => {
  let component: ComplainsDetailsComponent;
  let fixture: ComponentFixture<ComplainsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplainsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
