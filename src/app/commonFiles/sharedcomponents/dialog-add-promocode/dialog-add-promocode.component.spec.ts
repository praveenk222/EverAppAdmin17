import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPromocodeComponent } from './dialog-add-promocode.component';

describe('DialogAddPromocodeComponent', () => {
  let component: DialogAddPromocodeComponent;
  let fixture: ComponentFixture<DialogAddPromocodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddPromocodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddPromocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
