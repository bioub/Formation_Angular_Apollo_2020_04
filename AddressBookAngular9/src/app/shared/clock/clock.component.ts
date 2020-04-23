import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { startWith, map, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'ab-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  now$: Observable<Date>;

  ngOnInit(): void {
    this.now$ = interval(1000).pipe(
      startWith(0),
      map(() => new Date()),
      finalize(() => console.log('interval completed'))
    );
  }

  // now: Date;

  // private subscription: Subscription;

  // ngOnInit(): void {
  //   this.subscription = interval(1000)
  //     .pipe(
  //       startWith(0),
  //       map(() => new Date()),
  //       finalize(() => console.log('interval completed'))
  //     )
  //     .subscribe({
  //       next: (now) => {
  //         this.now = now;
  //       },
  //       complete: () => {
  //         console.log('interval completed');
  //       },
  //     });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
