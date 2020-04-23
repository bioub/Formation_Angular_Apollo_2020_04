const { interval } = require('rxjs');
const {take, shareReplay} = require('rxjs/operators');

const interval$ = interval(1000);

const subject$ = interval$.pipe(
  take(2),
  shareReplay(1),
);

subject$.subscribe((count) => console.log('A', count));

setTimeout(() => {
  subject$.subscribe((count) => console.log('B', count));
}, 5500);


//       interval$
//           ^
//           |
//        subject$
//       /        \
//      log       log





// observable -> subject$.subscribe
// observer -> subject$.next|error|
