import { TestBed } from '@angular/core/testing';

import { NgxRadialService } from './ngx-radial.service';

describe('NgxRadialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRadialService = TestBed.get(NgxRadialService);
    expect(service).toBeTruthy();
  });
});
