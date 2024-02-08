import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpricedataComponent } from './addpricedata.component';

describe('AddpricedataComponent', () => {
  let component: AddpricedataComponent;
  let fixture: ComponentFixture<AddpricedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpricedataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddpricedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
