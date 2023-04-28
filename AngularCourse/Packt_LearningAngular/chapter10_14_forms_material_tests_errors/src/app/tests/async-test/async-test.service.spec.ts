import { TestBed } from '@angular/core/testing';

import { AsyncTestService } from './async-test.service';

describe('AsyncTestService', () => {
  let service: AsyncTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncTestService);
  });

  it('should set data', () => {
    const result = service.setData('Fake hero');
    expect(result.length).toBe(6);
  });
});
