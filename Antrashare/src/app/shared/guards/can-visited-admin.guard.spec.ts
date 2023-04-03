import { TestBed } from '@angular/core/testing';

import { CanVisitedAdminGuard } from './can-visited-admin.guard';

describe('CanVisitedAdminGuard', () => {
  let guard: CanVisitedAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanVisitedAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
