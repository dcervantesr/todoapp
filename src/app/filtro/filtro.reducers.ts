import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const filtroR = createReducer(
  initialState,
  on(setFiltro, (state, { filtro}) => filtro)
);

export function filtroReducer(state, action) {
  return filtroR(state, action);
}
