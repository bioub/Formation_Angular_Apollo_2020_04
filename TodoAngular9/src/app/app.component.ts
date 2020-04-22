import { Component, ChangeDetectorRef } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  // private todoService: TodoService;
  // constructor(todoService: TodoService) {
  //   this.todoService = todoService;
  // }

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAll().subscribe((data) => {
      this.todos = data;
    });

  }

  handleNewTodo(todo: Todo) {
    // this.todos.unshift(todo); // changement muable
    this.todos = [todo, ...this.todos]; // changement immuable
  }

  handleDeleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  ngDoCheck(): void {
    console.log('AppComponent checked');
  }
}
