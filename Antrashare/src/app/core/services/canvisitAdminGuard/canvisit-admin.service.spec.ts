import { TestBed } from '@angular/core/testing';

import { CanvisitAdminService } from './canvisit-admin.service';

describe('CanvisitAdminService', () => {
  let service: CanvisitAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvisitAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
