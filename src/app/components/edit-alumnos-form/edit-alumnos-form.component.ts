import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-edit-alumnos-form',
  templateUrl: './edit-alumnos-form.component.html',
  styleUrls: ['./edit-alumnos-form.component.css']
})
export class EditAlumnosFormComponent {

  formAlumnos: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditAlumnosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alumno
  ) {
    this.formAlumnos = new FormGroup(
      {
        nombre: new FormControl(data.nombre),
        apellido: new FormControl(data.apellido),
        email: new FormControl(data.email),
        estado: new FormControl(data.estado)
      }
    )

  }
}
