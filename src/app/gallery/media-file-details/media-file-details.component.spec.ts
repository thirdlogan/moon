import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFileDetailsComponent } from './media-file-details.component';

describe('MediaFileDetailsComponent', () => {
  let component: MediaFileDetailsComponent;
  let fixture: ComponentFixture<MediaFileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
