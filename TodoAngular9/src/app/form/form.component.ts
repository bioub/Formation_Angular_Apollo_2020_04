import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  DoCheck,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/todos.reducers';
import { selectTodosItems, selectTodosInput } from '../store/selectors.todo';
import { todosAdd } from '../store/todos.actions';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements DoCheck, OnInit {
  public todo: Todo = {
    title: '',
    completed: false,
  };
  // public todo: Partial<Todo> = {
  //   title: '',
  //   completed: false,
  // };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectTodosInput).subscribe((input) => {
      this.todo.title = input;
    });
  }

  ngDoCheck(): void {
    console.log('FormComponent checked');
  }

  addTodo() {
    // emet la référence de l'objet
    // this.add.emit(this.todo);
    // emet la copie de l'objet
    // this.add.emit({...this.todo});
    this.store.dispatch(
      todosAdd({ payload: { ...this.todo, id: Math.random() } })
    );
  }
}
