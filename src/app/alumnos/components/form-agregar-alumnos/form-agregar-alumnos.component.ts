import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-form-agregar-alumnos',
  templateUrl: './form-agregar-alumnos.component.html',
  styleUrls: ['./form-agregar-alumnos.component.css']
})
export class FormAgregarAlumnosComponent {

  formAgregarAlumnos: FormGroup

  constructor(
    private alumnosService: AlumnosService,
    private dialogRef: MatDialogRef<FormAgregarAlumnosComponent>
  ) {
    this.formAgregarAlumnos = new FormGroup(
      {
        id: new FormControl(""),
        nombre: new FormControl("", [Validators.required]),
        apellido: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        estado: new FormControl(),
      }
    )
  }

  agregarAlumno() {
    let alumno: alumno = {
      id: this.alumnosService.id++,
      nombre: this.formAgregarAlumnos.value.nombre.toLocaleLowerCase(),
      apellido: this.formAgregarAlumnos.value.apellido.toLocaleLowerCase(),
      email: this.formAgregarAlumnos.value.email,
      estado: this.formAgregarAlumnos.value.estado
    };
    this.dialogRef.close();
    this.alumnosService.agregarAlumno(alumno);
    }

}

