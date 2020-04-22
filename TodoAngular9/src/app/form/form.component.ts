import { Component, OnInit, EventEmitter, Output, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements DoCheck {

  @Output() add = new EventEmitter<Todo>();


  public todo: Todo = {
    title: '',
    completed: false,
  };
  // public todo: Partial<Todo> = {
  //   title: '',
  //   completed: false,
  // };

  public addTodo() {
    // emet la référence de l'objet
    // this.add.emit(this.todo);

    // emet la copie de l'objet
    this.add.emit({...this.todo});
  }

  ngDoCheck(): void {
    console.log('FormComponent checked');
  }

}
