import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-edit-alumnos-form',
  templateUrl: './edit-alumnos-form.component.html',
  styleUrls: ['./edit-alumnos-form.component.css']
})
export class EditAlumnosFormComponent {

  formAlumnos: FormGroup;

  @Output() eventoEditarAlumno: EventEmitter<alumno> = new EventEmitter<alumno>();



  constructor(
    private dialogRef: MatDialogRef<EditAlumnosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alumno
  ) {
    this.formAlumnos = new FormGroup(
      {
        id: new FormControl(data.id),
        nombre: new FormControl(data.nombre, [Validators.required]),
        apellido: new FormControl(data.apellido, [Validators.required]),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        estado: new FormControl(data.estado)
      }
    )
  }

  editarAlumno() {
    this.dialogRef.close({data:this.formAlumnos.value})
  }

}
