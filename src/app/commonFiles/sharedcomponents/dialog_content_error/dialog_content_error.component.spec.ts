import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContenterrorComponent } from './dialog_content_error.component';

describe('DialogContenterrorComponent', () => {
  let component: DialogContenterrorComponent;
  let fixture: ComponentFixture<DialogContenterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogContenterrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContenterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
