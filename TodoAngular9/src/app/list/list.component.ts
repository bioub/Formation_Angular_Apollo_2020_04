import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements DoCheck {

  @Input()  todos: Todo[];
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngDoCheck(): void {
    console.log('ListComponent checked');
  }

  handleDelete(todo: Todo) {
    this.delete.emit(todo);
  }
}
