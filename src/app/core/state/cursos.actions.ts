import { createAction, props } from "@ngrx/store"
import { curso } from "src/app/models/curso"

export const cargarCursos = createAction(
    "[Table Cursos] Cargar cursos"
)

export const cursosCargados = createAction(
    "[Table Cursos] Cursos cargados",
    props<{ cursos: curso[] }>()
)