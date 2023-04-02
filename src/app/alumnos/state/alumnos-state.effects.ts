import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from "@angular/material/snack-bar";
import { concatMap, map } from 'rxjs/operators';
import { AlumnosService } from '../services/alumnos.service';
import { agregarAlumno, alumnosCargados, cargarAlumnosStates, editarAlumno, eliminarAlumno } from './alumnos-state.actions';
import { alumno } from '../../models/alumno';

@Injectable()
export class AlumnosStateEffects {

  cargarAlumnos$ = createEffect(() => {
    return this.action$.pipe(
      ofType(cargarAlumnosStates),
      concatMap(() => {
        return this.alumnos.obtenerAlumnos().pipe(
          map((a: alumno[]) =>
            alumnosCargados({ alumnos: a })
          )
        )
      })
    )
  });

  agregarAlumnos$ = createEffect(() => {
    return this.action$.pipe(
      ofType(agregarAlumno),
      concatMap(({ alumno }) => {
        return this.alumnos.agregarAlumno(alumno).pipe(
          map((alumno: alumno) => {
            this.snackBar.open(`${alumno.nombre} ${alumno.apellido} agregado satisfactoriamente`)
            return cargarAlumnosStates();
          })
        )
      })
    )
  });

  eliminarAlumnos$ = createEffect(() => {
    return this.action$.pipe(
      ofType(eliminarAlumno),
      concatMap(({ alumno }) => {
        return this.alumnos.eliminarAlumnos(alumno).pipe(
          map((alumno: alumno) => {
            return cargarAlumnosStates();
          }
          )
        )
      })
    )
  });

  editarAlumnos$ = createEffect(() => {
    return this.action$.pipe(
      ofType(editarAlumno),
      concatMap(({ alumno }) => {
        return this.alumnos.editarAlumno(alumno).pipe(
          map((alumno: alumno) => {
            return cargarAlumnosStates();
          }
          )
        )
      })
    )
  });

  constructor(
    private alumnos: AlumnosService,
    private action$: Actions,
    private snackBar: MatSnackBar
  ) {
  }
}
