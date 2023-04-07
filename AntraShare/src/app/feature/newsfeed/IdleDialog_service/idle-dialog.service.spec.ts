import { TestBed } from '@angular/core/testing';

import { IdleDialogService } from './idle-dialog.service';

describe('IdleDialogService', () => {
  let service: IdleDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdleDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
