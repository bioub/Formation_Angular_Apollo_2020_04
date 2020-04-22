import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck {

  public todos = ['Item 1', 'Item 2', 'Item 3'];

  public handleNewTodo(todo) {
    this.todos = [todo, ...this.todos];
  }

  ngDoCheck(): void {
    console.log('AppComponent checked');
  }

}
