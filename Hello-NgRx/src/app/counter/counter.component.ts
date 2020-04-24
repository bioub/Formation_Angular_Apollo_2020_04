import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCount } from '../store/count.selectors';
import { countIncrement } from '../store/count.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(
      select(selectCount)
    );
  }

  handleClick() {
    this.store.dispatch(countIncrement())
  }
}
