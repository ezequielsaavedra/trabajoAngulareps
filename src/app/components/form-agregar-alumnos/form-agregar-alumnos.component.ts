import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-form-agregar-alumnos',
  templateUrl: './form-agregar-alumnos.component.html',
  styleUrls: ['./form-agregar-alumnos.component.css']
})
export class FormAgregarAlumnosComponent {

  formAgregarAlumnos: FormGroup

  @Output() eventoAgregarAlumno: EventEmitter<alumno> = new EventEmitter<alumno>();

    agregarAlumno() {
      this.eventoAgregarAlumno.emit(this.formAgregarAlumnos.value)
    }

  constructor() {
    this.formAgregarAlumnos = new FormGroup(
      {
        nombre: new FormControl("", [Validators.required]),
        apellido: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        estado: new FormControl(),
      }
    )
  }
}

