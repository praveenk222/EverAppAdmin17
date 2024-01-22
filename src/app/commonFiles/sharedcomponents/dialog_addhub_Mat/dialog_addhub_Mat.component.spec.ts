import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddhubMatComponent } from './dialog_addhub_Mat.component';

describe('DialogAddhubMatComponent', () => {
  let component: DialogAddhubMatComponent;
  let fixture: ComponentFixture<DialogAddhubMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddhubMatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddhubMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
