import { TestBed } from '@angular/core/testing';

import { ReactiveFormsService } from './reactive-forms.service';

describe('ReactiveFormsService', () => {
  let service: ReactiveFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
