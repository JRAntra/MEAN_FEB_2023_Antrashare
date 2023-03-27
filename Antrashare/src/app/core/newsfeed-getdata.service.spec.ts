import { TestBed } from '@angular/core/testing';

import { NewsfeedGetdataService } from './newsfeed-getdata.service';

describe('NewsfeedGetdataService', () => {
  let service: NewsfeedGetdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsfeedGetdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
