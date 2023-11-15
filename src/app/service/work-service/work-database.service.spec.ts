import { TestBed } from '@angular/core/testing';

import { WorkDatabaseService } from './work-database.service';

describe('WorkDatabaseService', () => {
  let service: WorkDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
