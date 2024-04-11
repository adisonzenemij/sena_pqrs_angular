import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SyEliminateService } from './sy-eliminate.service';

describe('SyEliminateService', () => {
  let service: SyEliminateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SyEliminateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
