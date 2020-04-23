const { interval, AsyncSubject } = require('rxjs');
const {take} = require('rxjs/operators');

const interval$ = interval(1000).pipe(take(2));

const subject$ = new AsyncSubject();

interval$.subscribe(subject$);

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
