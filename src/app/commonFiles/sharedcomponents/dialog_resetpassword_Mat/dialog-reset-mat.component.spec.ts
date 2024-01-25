import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentMatComponent } from './dialog-content-mat.component';

describe('DialogContentMatComponent', () => {
  let component: DialogContentMatComponent;
  let fixture: ComponentFixture<DialogContentMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogContentMatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContentMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
