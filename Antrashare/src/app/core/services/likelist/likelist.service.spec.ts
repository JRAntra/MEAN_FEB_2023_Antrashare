import { TestBed } from '@angular/core/testing';

import { LikelistService } from './likelist.service';

describe('LikelistService', () => {
  let service: LikelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
