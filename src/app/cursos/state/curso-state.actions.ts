import { createAction, props } from '@ngrx/store';
import { curso } from '../../models/curso';

export const loadCursoStates = createAction(
  '[CursoState] Load CursoStates'
);

export const cursosCargados = createAction(
  "[CursoState] Cursos cargados",
  props<{ cursos: curso[] }>()
);

export const agregarCurso = createAction(
  "[CursoState] Agregar Curso",
  props<{ curso: curso }>()
)

export const eliminarCurso = createAction(
  "[CursoState] Eliminar Curso",
  props<{ curso: curso }>()
)

export const editarCurso = createAction(
  "[CursoState] Editar Curso",
  props<{ curso: curso }>()
)