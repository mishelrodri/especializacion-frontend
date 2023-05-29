import { TestBed } from '@angular/core/testing';

import { SwiitchService } from './swiitch.service';

describe('SwiitchService', () => {
  let service: SwiitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
