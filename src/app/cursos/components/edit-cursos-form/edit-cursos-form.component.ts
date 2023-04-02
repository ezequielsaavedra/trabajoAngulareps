import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { curso } from 'src/app/models/curso';
import { editarCurso } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';


@Component({
  selector: 'app-edit-cursos-form',
  templateUrl: './edit-cursos-form.component.html',
  styleUrls: ['./edit-cursos-form.component.css'],
})
export class EditCursosFormComponent {
  formCursos: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditCursosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: curso,
    private adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private locale: string,
    private store: Store<CursoState>,
  ) {
    this.formCursos = new FormGroup(
      {
        nombreCurso: new FormControl(data.nombreCurso),
        profesor: new FormControl(data.profesor, [Validators.required]),
        comision: new FormControl(data.comision),
        estadoInscripcion: new FormControl(data.estadoInscripcion),
        fechaInicio: new FormControl(data.fechaInicio),
        fechaFin: new FormControl(data.fechaFin)
      }
    )
    this.getDateFormate()
  }

  getDateFormate(): string {
    this.locale = "fr"
    this.adapter.setLocale(this.locale)
    return ""
  }

  editarCurso() {
    let curso: curso = {
      id: this.data.id,
      nombreCurso: this.formCursos.value.nombreCurso,
      profesor: this.formCursos.value.profesor,
      comision: this.formCursos.value.comision,
      estadoInscripcion: this.formCursos.value.estadoInscripcion,
      fechaInicio: this.formCursos.value.fechaInicio,
      fechaFin: this.formCursos.value.fechaFin
    };
    this.store.dispatch(editarCurso({curso: curso}));
    this.dialogRef.close();
  }
}
