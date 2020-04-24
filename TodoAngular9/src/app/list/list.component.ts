import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  DoCheck,
  Output,
  EventEmitter,
} from '@angular/core';
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/todos.reducers';
import { selectTodos, selectTodosItems } from '../store/selectors.todo';
import { todosDelete } from '../store/todos.actions';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements DoCheck, OnInit {
  todos: Todo[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectTodosItems).subscribe((todos) => {
      this.todos = todos;
    });
  }

  ngDoCheck(): void {
    console.log('ListComponent checked');
  }

  handleDelete(todo: Todo) {
    this.store.dispatch(todosDelete({payload: todo}));
  }
}
