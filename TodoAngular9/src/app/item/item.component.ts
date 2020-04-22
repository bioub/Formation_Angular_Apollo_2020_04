import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements DoCheck {

  @Input()
  public todo: string;

  ngDoCheck(): void {
    console.log('ItemComponent checked');
  }

}
