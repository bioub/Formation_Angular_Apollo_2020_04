import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ab-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class SelectComponent implements OnInit {


  @Input() selected = 'en';
  @Input() items: string[] = ['en', 'fr'];

  @Output() selectedChange = new EventEmitter<string>();

  opened = false;

  constructor() { }

  ngOnInit() {

  }

  handleItemClick(item: string) {
    this.selected = item;
    this.selectedChange.emit(item);
  }

}
