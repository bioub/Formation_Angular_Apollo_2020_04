import { createReducer, on } from '@ngrx/store';
import { countIncrement } from './count.actions';

const initialState = 0;

export const countReducer = createReducer(
  initialState,
  on(countIncrement, (state) => state + 1)
);
