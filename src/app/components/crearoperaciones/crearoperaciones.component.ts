import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crearoperaciones',
  templateUrl: './crearoperaciones.component.html',
  styleUrls: ['./crearoperaciones.component.css']
})
export class CrearoperacionesComponent {
  formulario: FormGroup;
 
  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({

      cuenta: [''],

      codigoTransaccion: [''],

      monto: ['']

    });

  }
 
  enviarFormulario() {

    console.log('Datos del formulario:', this.formulario.value);

  }
 
}
