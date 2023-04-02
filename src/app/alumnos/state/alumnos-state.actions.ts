import { createAction, props } from '@ngrx/store';
import { alumno } from '../../models/alumno';

export const cargarAlumnosStates = createAction(
  '[AlumnosState] Cargar AlumnosStates'
);

export const alumnosCargados = createAction(
  "[AlumnosState] Alumnos cargados",
  props<{ alumnos: alumno[] }>()
);

export const agregarAlumno = createAction(
  "[AlumnosState] Agregar Alumno",
  props<{ alumno: alumno }>()
)

export const eliminarAlumno = createAction(
  "[AlumnosState] Eliminar Alumno",
  props<{ alumno: alumno }>()
)

export const editarAlumno = createAction(
  "[AlumnosState] Editar Alumno",
  props<{ alumno: alumno }>()
)




