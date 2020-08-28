import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';
import { todosReducer } from './todos/todos.reducers';
import { filtrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducers';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  filtro: filtroReducer
};
