import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCount } from '../store/count.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(
      select(selectCount)
    );
  }

}
