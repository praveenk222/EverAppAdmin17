import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserdetailsComponent } from './adminuserdetails.component';

describe('AdminuserdetailsComponent', () => {
  let component: AdminuserdetailsComponent;
  let fixture: ComponentFixture<AdminuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminuserdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
