import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SyIconService } from './sy-icon.service';

describe('SyIconService', () => {
  let service: SyIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SyIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
