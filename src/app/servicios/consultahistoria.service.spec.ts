import { TestBed } from '@angular/core/testing';

import { ConsultahistoriaService } from './consultahistoria.service';

describe('ConsultahistoriaService', () => {
  let service: ConsultahistoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultahistoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
