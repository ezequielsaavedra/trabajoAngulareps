import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { CursosService } from "../services/cursos.service";
import { agregarCurso, cursosCargados, editarCurso, eliminarCurso, loadCursoStates } from "./curso-state.actions";
import { curso } from "src/app/models/curso";

@Injectable()
export class CursosEffects {

    cargarCurso$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loadCursoStates),
            concatMap(() => {
                return this.cursos.obtenerCursos().pipe(
                    map((c: curso[]) => 
                        cursosCargados({ cursos : c })
                    )
                )
            })
        )
    }) ;
    agregarCurso$ = createEffect(() => {
        return this.action$.pipe(
            ofType(agregarCurso),
            concatMap(({ curso }) => {
                return this.cursos.agregarCurso(curso).pipe(
                    map((curso: curso) => {
                        this.snackBar.open(`${curso.nombreCurso} agregado satisfactoriamente`);
                        return loadCursoStates();
                    })
                )
            })
        );
    });
    elimninarCurso$ = createEffect(() => {
        return this.action$.pipe(
            ofType(eliminarCurso),
            concatMap(({ curso }) => {
                return this.cursos.eliminarCursos(curso).pipe(
                    map((curso: curso) => {
                        return loadCursoStates();
                    })
                )
            })
        )
    });
    
    editarCurso$ = createEffect(() => {
        return this.action$.pipe(
            ofType(editarCurso),
            concatMap(({ curso }) => {
                return this.cursos.editarCurso(curso).pipe(
                    map((curso: curso) => {
                        return loadCursoStates();
                    })
                )
            })
        );
    });

    constructor(
        private cursos: CursosService,
        private action$: Actions,
        private snackBar: MatSnackBar
    ) {

    }
}