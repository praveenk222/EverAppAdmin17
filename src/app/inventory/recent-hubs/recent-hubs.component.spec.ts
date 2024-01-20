import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentHubsComponent } from './recent-hubs.component';

describe('RecentHubsComponent', () => {
  let component: RecentHubsComponent;
  let fixture: ComponentFixture<RecentHubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentHubsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentHubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
