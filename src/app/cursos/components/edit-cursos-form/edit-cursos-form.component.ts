import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'app-edit-cursos-form',
  templateUrl: './edit-cursos-form.component.html',
  styleUrls: ['./edit-cursos-form.component.css'],
})
export class EditCursosFormComponent {
formCursos: FormGroup;

constructor(
  private cursosService: CursosService,
  private dialogRef: MatDialogRef<EditCursosFormComponent>,
  @Inject(MAT_DIALOG_DATA) public data: curso,
  private adapter: DateAdapter<any>,
  @Inject(MAT_DATE_LOCALE) private locale: string,
){
  this.formCursos = new FormGroup(
    {
      comision: new FormControl(data.comision),
      nombre: new FormControl(data.profesor.nombre, [Validators.required]),
      apellido: new FormControl(data.profesor.apellido, [Validators.required]),
      email: new FormControl(data.profesor.email, [Validators.required]),
      estadoInscipcion: new FormControl(data.estadoInscripcion),
      fechaInicio: new FormControl(data.fechaInicio),
      fechaFin: new FormControl(data.fechaFin)
    }
  )
  this.getDateFormate()
}

getDateFormate(): string{
  this.locale = "fr"
  this.adapter.setLocale(this.locale)
  return ""
}

editarCurso() {
  let curso: curso = {
    comision: this.formCursos.value.comision,
    profesor: {
      nombre: this.formCursos.value.nombre,
      apellido: this.formCursos.value.apellido,
      email: this.formCursos.value.email
    },
    estadoInscripcion: this.formCursos.value.estadoInscipcion,
    fechaInicio: this.formCursos.value.fechaInicio,
    fechaFin: this.formCursos.value.fechaFin
  };
  this.dialogRef.close();
  this.cursosService.editarCurso(curso);
}
}