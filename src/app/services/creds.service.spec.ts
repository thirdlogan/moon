import { TestBed, inject } from '@angular/core/testing';

import { CredsService } from './creds.service';

describe('CredsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredsService]
    });
  });

  it('should be created', inject([CredsService], (service: CredsService) => {
    expect(service).toBeTruthy();
  }));
});
