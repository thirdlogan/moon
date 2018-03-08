import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioUpdateComponent } from './audio-update.component';

describe('AudioUpdateComponent', () => {
  let component: AudioUpdateComponent;
  let fixture: ComponentFixture<AudioUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
