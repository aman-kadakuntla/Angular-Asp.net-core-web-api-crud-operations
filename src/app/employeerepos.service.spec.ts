import { TestBed } from '@angular/core/testing';

import { EmployeereposService } from './employeerepos.service';

describe('EmployeereposService', () => {
  let service: EmployeereposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeereposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
