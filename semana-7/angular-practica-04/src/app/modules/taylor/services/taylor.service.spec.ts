/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaylorService } from './taylor.service';

describe('Service: Taylor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaylorService]
    });
  });

  it('should ...', inject([TaylorService], (service: TaylorService) => {
    expect(service).toBeTruthy();
  }));
});
