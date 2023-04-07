import { TestBed } from '@angular/core/testing';

import { CanVisitAdminGuard } from './can-visit-admin.guard';

describe('CanVisitAdminGuard', () => {
  let guard: CanVisitAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanVisitAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
