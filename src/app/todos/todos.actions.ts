import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODOS] Crear tarea',
  props<{texto: string}>()
);

export const toggleEditar = createAction(
  '[TODOS] Toggle de edición',
  props<{id: number}>()
);

export const editar = createAction(
  '[TODOS] Editar tarea',
  props<{id: number, texto: string}>()
);

export const borrar = createAction(
  '[TODOS] Borrar tarea',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODOS] Toggle All',
  props<{completado: boolean}>()
);

export const borarrCompletados = createAction('[TODOS] Limpiar Completados');
