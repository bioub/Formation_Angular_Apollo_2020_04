import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos = ['Item 1', 'Item 2', 'Item 3'];

  public handleNewTodo(todo) {
    this.todos = [todo, ...this.todos];
  }

  ngDoCheck(): void {
    console.log('AppComponent checked');
  }
}
