import { TestBed } from '@angular/core/testing';

import { CanLeaveLoginGuard } from './can-leave-login.guard';

describe('CanLeaveLoginGuard', () => {
  let guard: CanLeaveLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLeaveLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
