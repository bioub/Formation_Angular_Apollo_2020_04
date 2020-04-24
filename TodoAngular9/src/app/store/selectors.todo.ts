import { AppState } from './todos.reducers';
import { createSelector } from '@ngrx/store';

export const selectTodos = (state: AppState) => state.todos;

export const selectTodosItems = createSelector(
  selectTodos,
  (todosState) => todosState.items
);

export const selectTodosInput = createSelector(
  selectTodos,
  (todosState) => todosState.input
);
