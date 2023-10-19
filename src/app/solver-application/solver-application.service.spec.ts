import { TestBed } from '@angular/core/testing';

import { SolverApplicationService } from './solver-application.service';

describe('SolverApplicationService', () => {
  let service: SolverApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolverApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
