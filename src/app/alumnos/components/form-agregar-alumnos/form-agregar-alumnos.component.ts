import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumnos.state';
import { Store } from '@ngrx/store';
import { agregarAlumno } from '../../state/alumnos-state.actions';


@Component({
  selector: 'app-form-agregar-alumnos',
  templateUrl: './form-agregar-alumnos.component.html',
  styleUrls: ['./form-agregar-alumnos.component.css']
})
export class FormAgregarAlumnosComponent {

  formAgregarAlumnos: FormGroup

  constructor(
    private dialogRef: MatDialogRef<FormAgregarAlumnosComponent>,
    private store : Store<AlumnoState>
  ) {
    this.formAgregarAlumnos = new FormGroup(
      {
        nombre: new FormControl("", [Validators.required]),
        apellido: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        estado: new FormControl(),
      }
    )
  }

  agregarAlumno() {
    let alumno: alumno = {
      id: "",
      nombre: this.formAgregarAlumnos.value.nombre.toLocaleLowerCase(),
      apellido: this.formAgregarAlumnos.value.apellido.toLocaleLowerCase(),
      email: this.formAgregarAlumnos.value.email,
      estado: this.formAgregarAlumnos.value.estado
    };
    this.store.dispatch(agregarAlumno({ alumno: alumno }));
      this.dialogRef.close();
    }

}

