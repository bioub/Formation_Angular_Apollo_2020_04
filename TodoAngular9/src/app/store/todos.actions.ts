import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo.model';

export const todosAdd = createAction('[todos] add', props<{payload: Todo}>());
export const todosDelete = createAction('[todos] delete', props<{payload: Todo}>());
export const todosModifyInput = createAction('[todos] modify input', props<{payload: string}>());
