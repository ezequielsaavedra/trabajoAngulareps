import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-cursos-form',
  templateUrl: './agregar-cursos-form.component.html',
  styleUrls: ['./agregar-cursos-form.component.css']
})
export class AgregarCursosFormComponent {
  formAgregarCurso: FormGroup

  constructor(
    private cursoService: CursosService,
    private dialogRef: MatDialogRef<AgregarCursosFormComponent>,
    private adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private locale: string,
  ){
    this.formAgregarCurso = new FormGroup(
      {
        nombreCurso: new FormControl("", [Validators.required]),
        nombre: new FormControl("", [Validators.required]),
        apellido: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        estadoInscripcion: new FormControl(),
        fechaInicio: new FormControl("",[Validators.required]),
        fechaFin: new FormControl("",[Validators.required])
      }
    )
    this.getDateFormate()
  }

  getDateFormate(): string{
    this.locale = "fr"
    this.adapter.setLocale(this.locale)
    return ""
  }

  numeroComision():number{
     return Math.floor(Math.random() * (10000 - 999) + 999)
  } 

  agregarCurso(){
    let curso: curso = {
      nombreCurso: this.formAgregarCurso.value.nombreCurso,
      comision: this.cursoService.numeroComision(),
      profesor: {
        nombre: this.formAgregarCurso.value.nombre,
        apellido: this.formAgregarCurso.value.apellido,
        email: this.formAgregarCurso.value.email,
      },
      estadoInscripcion: this.formAgregarCurso.value.estadoInscripcion,
      fechaInicio: this.formAgregarCurso.value.fechaInicio,
      fechaFin: this.formAgregarCurso.value.fechaFin,
    };
    this.dialogRef.close();
    this.cursoService.agregarCurso(curso);
  }
}
