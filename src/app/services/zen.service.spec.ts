import { TestBed } from '@angular/core/testing';

import { ZenService } from './zen.service';

describe('ZenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZenService = TestBed.get(ZenService);
    expect(service).toBeTruthy();
  });
});
