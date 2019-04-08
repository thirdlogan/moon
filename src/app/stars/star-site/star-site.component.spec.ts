import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSiteComponent } from './star-site.component';

describe('StarSiteComponent', () => {
  let component: StarSiteComponent;
  let fixture: ComponentFixture<StarSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
