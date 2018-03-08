import { TestBed, inject } from '@angular/core/testing';

import { UpdatesService } from './updates.service';

describe('UpdatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatesService]
    });
  });

  it('should be created', inject([UpdatesService], (service: UpdatesService) => {
    expect(service).toBeTruthy();
  }));
});
