import { TestBed } from '@angular/core/testing';

import { ConsultasaldoService } from './consultasaldo.service';

describe('ConsultasaldoService', () => {
  let service: ConsultasaldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasaldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
