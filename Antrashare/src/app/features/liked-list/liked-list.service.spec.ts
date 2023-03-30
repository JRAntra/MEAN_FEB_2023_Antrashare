import { TestBed } from '@angular/core/testing';

import { LikedListService } from './liked-list.service';

describe('LikedListService', () => {
  let service: LikedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
