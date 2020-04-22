import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements DoCheck {

  @Input() public todo: Todo;
  @Output() delete = new EventEmitter<Todo>();

  ngDoCheck(): void {
    console.log('ItemComponent checked');
  }

  handleDelete(todo) {
    this.delete.emit(todo);
  }
}
