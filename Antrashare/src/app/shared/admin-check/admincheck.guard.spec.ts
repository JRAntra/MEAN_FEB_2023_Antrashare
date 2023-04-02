import { TestBed } from '@angular/core/testing';

import { AdmincheckGuard } from './admincheck.guard';

describe('AdmincheckGuard', () => {
  let guard: AdmincheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmincheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
