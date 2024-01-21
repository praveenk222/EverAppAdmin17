import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentMatUploadComponent } from './dialog-content-mat-upload.component';

describe('DialogContentMatUploadComponent', () => {
  let component: DialogContentMatUploadComponent;
  let fixture: ComponentFixture<DialogContentMatUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogContentMatUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContentMatUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
