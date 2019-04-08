import { TestBed } from '@angular/core/testing';

import { StarService } from './stars.service';

describe('StarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarService = TestBed.get(StarService);
    expect(service).toBeTruthy();
  });
});
