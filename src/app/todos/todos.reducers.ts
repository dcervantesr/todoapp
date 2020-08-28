import { createReducer, on } from '@ngrx/store';
import { crear, toggleEditar, editar, borrar, toggleAll, borarrCompletados } from './todos.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Seguir siendo feliz'),
  new Todo('Seguir siendo feliz'),
  new Todo('Seguir siendo feliz'),
  new Todo('Seguir siendo feliz'),
  new Todo('Seguir siendo feliz')
];

const todosR = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(toggleEditar, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, {id, texto}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),

  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(toggleAll, (state, {completado}) => {
    return state.map( todo => {
        return {
          ...todo,
          completado
        };
    });
  }),

  on(borarrCompletados, (state) => state.filter(todo => !todo.completado))
);

export function todosReducer(state, action) {
  return todosR(state, action);
}
