import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnosState from './alumnos-state.reducer';

export const selectAlumnosState = createFeatureSelector<fromAlumnosState.State>(
  fromAlumnosState.alumnosStateFeatureKey
);

export const selectCargandoAlumnos = createSelector(
  selectAlumnosState,
  (state: fromAlumnosState.State) => state.cargando
);

export const selectAlumnosCargados = createSelector(
  selectAlumnosState,
  (state: fromAlumnosState.State) => state.alumnos
);
