import { TestBed } from '@angular/core/testing';

import { LikeListService } from './like-list.service';

describe('LikeListService', () => {
  let service: LikeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
