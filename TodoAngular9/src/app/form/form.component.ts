import { Component, OnInit, EventEmitter, Output, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements DoCheck {

  @Output()
  public onAddTodo = new EventEmitter<string>();
  public todo: string;

  public addTodo() {
    this.onAddTodo.emit(this.todo);
  }

  ngDoCheck(): void {
    console.log('FormComponent checked');
  }

}
