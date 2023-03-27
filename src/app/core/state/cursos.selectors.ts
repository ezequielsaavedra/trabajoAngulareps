import { createSelector } from "@ngrx/store";
import { CursoState } from "src/app/models/cursos.state";
import { AppState } from "./app.state";

export const cursosSelector = (state: AppState) => {
    return state.cursos;
};

export const cargandoCursosSelector = createSelector(
    cursosSelector,
    (state: CursoState) => {
        return state.cargando;
    }
);

export const cursosCargadoSelector = createSelector(
    cursosSelector,
    (state: CursoState) => {
        return state.cursos;
    }
);