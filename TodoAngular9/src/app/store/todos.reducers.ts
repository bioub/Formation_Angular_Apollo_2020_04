import { createReducer, Action, on } from '@ngrx/store';
import { Todo } from '../todo.model';
import { todosAdd, todosDelete, todosModifyInput } from './todos.actions';

export interface AppState {
  todos: TodosState;
}

export interface TodosState {
  input: string;
  items: Todo[];
}

const initialState: TodosState = {
  input: 'Achjgfdhjhkc',
  items: [
    {
      id: 123,
      title: 'ACFGGHDGHF',
      completed: true,
    },
  ],
};

export const todosReducer = createReducer<TodosState, Action>(
  initialState,
  on(todosAdd, (state, action) => ({
    ...state,
    input: '',
    items: [action.payload, ...state.items],
  })),
  on(todosDelete, (state, action) => ({
    ...state,
    items: state.items.filter((t) => t.id !== action.payload.id),
  })),
  on(todosModifyInput, (state, action) => ({ ...state, input: action.payload }))
);
