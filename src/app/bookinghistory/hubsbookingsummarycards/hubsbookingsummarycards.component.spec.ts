import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubsbookingsummarycardsComponent } from './hubsbookingsummarycards.component';

describe('HubsbookingsummarycardsComponent', () => {
  let component: HubsbookingsummarycardsComponent;
  let fixture: ComponentFixture<HubsbookingsummarycardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HubsbookingsummarycardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HubsbookingsummarycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
