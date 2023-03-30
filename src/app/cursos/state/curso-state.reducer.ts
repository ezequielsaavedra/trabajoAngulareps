import { createFeature, createReducer, on } from '@ngrx/store';
import { curso } from '../../models/curso';
import * as CursoStateActions from './curso-state.actions';

export const cursoStateFeatureKey = 'cursoState';

export interface CursoState {
  cargando: boolean;
  cursos: curso[]
}

export const initialState: CursoState = {
  cargando: false,
  cursos: []
};

export const reducer = createReducer(
  initialState,
  on(CursoStateActions.loadCursoStates, (state) => {
    return {...state, cargando: true };
  }
  ),
  on(CursoStateActions.cursosCargados, (state, { cursos }) => {
    return {...state, cargando: false, cursos};
  }
  ),
  on(CursoStateActions.agregarCurso, (state, { curso: curso }) => {
    return state
  } ),
  on(CursoStateActions.eliminarCurso, (state, { curso: curso }) => {
    return state
  }),
  on(CursoStateActions.editarCurso, (state, { curso: curso }) => {
    return state
  })
);

export const cursoStateFeature = createFeature({
  name: cursoStateFeatureKey,
  reducer,
});

