import { TestBed } from '@angular/core/testing';

import { FetchAdminDataResolver } from './fetch-admin-data.resolver';

describe('FetchAdminDataResolver', () => {
  let resolver: FetchAdminDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchAdminDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
