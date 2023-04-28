import { TestBed } from '@angular/core/testing';

import { AsyncTestService } from './async-test.service';

describe('AsyncTestService', () => {
  let service: AsyncTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
