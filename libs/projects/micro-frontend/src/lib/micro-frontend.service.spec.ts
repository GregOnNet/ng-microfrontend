import { TestBed } from '@angular/core/testing';

import { MicroFrontendService } from './micro-frontend.service';

describe('MicroFrontendService', () => {
  let service: MicroFrontendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroFrontendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
