import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoserachComponent } from './autoserach.component';

describe('AutoserachComponent', () => {
  let component: AutoserachComponent;
  let fixture: ComponentFixture<AutoserachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoserachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoserachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
