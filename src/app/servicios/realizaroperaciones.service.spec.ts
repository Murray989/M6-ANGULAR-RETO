import { TestBed } from '@angular/core/testing';

import { RealizaroperacionesService } from './realizaroperaciones.service';

describe('RealizaroperacionesService', () => {
  let service: RealizaroperacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealizaroperacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
