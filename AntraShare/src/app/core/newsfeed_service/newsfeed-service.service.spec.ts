import { TestBed } from '@angular/core/testing';

import { NewsfeedServiceService } from './newsfeed-service.service';

describe('NewsfeedServiceService', () => {
  let service: NewsfeedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsfeedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
