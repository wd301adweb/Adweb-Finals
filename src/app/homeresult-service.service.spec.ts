import { TestBed } from '@angular/core/testing';

import { HomeresultServiceService } from './homeresult-service.service';

describe('HomeresultServiceService', () => {
  let service: HomeresultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeresultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
