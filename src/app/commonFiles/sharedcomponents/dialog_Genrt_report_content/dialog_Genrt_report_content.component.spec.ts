import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentReportComponent } from './dialog_Genrt_report_content.component';

describe('DialogContentReportComponent', () => {
  let component: DialogContentReportComponent;
  let fixture: ComponentFixture<DialogContentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogContentReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
