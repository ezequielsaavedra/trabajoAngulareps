import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { AlumnoState } from 'src/app/models/alumnos.state';
import { Store } from '@ngrx/store';
import { editarAlumno } from '../../state/alumnos-state.actions';

@Component({
  selector: 'app-edit-alumnos-form',
  templateUrl: './edit-alumnos-form.component.html',
  styleUrls: ['./edit-alumnos-form.component.css']
})
export class EditAlumnosFormComponent {
  formAlumnos: FormGroup;

  constructor(
    private alumnosService: AlumnosService,
    private dialogRef: MatDialogRef<EditAlumnosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alumno,
    private store : Store<AlumnoState>
  ) {
    this.formAlumnos = new FormGroup(
      {
        nombre: new FormControl(data.nombre, [Validators.required]),
        apellido: new FormControl(data.apellido, [Validators.required]),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        estado: new FormControl(data.estado)
      }
    )
  }

  editarAlumno() {
    let alumno: alumno = {
      id: this.data.id,
      nombre: this.formAlumnos.value.nombre.toLocaleLowerCase(),
      apellido: this.formAlumnos.value.apellido.toLocaleLowerCase(),
      email: this.formAlumnos.value.email,
      estado: this.formAlumnos.value.estado
    };
    this.store.dispatch(editarAlumno({alumno: alumno}));
    this.dialogRef.close();
  }

}
