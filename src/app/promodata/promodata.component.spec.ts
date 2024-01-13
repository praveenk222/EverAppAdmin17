import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromodataComponent } from './promodata.component';

describe('PromodataComponent', () => {
  let component: PromodataComponent;
  let fixture: ComponentFixture<PromodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromodataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
