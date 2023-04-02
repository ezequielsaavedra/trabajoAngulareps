import { createFeature, createReducer, on } from '@ngrx/store';
import * as AlumnosStateActions from './alumnos-state.actions';
import { alumno } from '../../models/alumno';

export const alumnosStateFeatureKey = 'alumnosState';

export interface State {
  cargando: boolean,
  alumnos: alumno[]
}

export const initialState: State = {
  cargando: false,
  alumnos: []
};

export const reducer = createReducer(
  initialState,
  on(AlumnosStateActions.cargarAlumnosStates, (state) => {
    return { ...state, cargando: true }
  }),
  on(AlumnosStateActions.alumnosCargados, (state, { alumnos }) => {
    return { ...state, cargando: false, alumnos }
  }),
  on(AlumnosStateActions.agregarAlumno, (state, { alumno: alumno }) => {
    return state
  }),
  on(AlumnosStateActions.eliminarAlumno, (state, { alumno: alumno }) => {
    return state
  }),
  on(AlumnosStateActions.editarAlumno, (state, { alumno: alumno }) => {
    return state
  }),
);

export const alumnosStateFeature = createFeature({
  name: alumnosStateFeatureKey,
  reducer,
});

