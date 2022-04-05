import { TestBed } from '@angular/core/testing';

import { StaffCardService } from './staff-card.service';

describe('StaffCardService', () => {
  let service: StaffCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
