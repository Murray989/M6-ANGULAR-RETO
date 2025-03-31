import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearoperacionesComponent } from './crearoperaciones.component';

describe('CrearoperacionesComponent', () => {
  let component: CrearoperacionesComponent;
  let fixture: ComponentFixture<CrearoperacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearoperacionesComponent]
    });
    fixture = TestBed.createComponent(CrearoperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
