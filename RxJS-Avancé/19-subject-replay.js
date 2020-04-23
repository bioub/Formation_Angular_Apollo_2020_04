const { interval, ReplaySubject } = require('rxjs');
const {take} = require('rxjs/operators');

const interval$ = interval(1000);

const subject$ = new ReplaySubject(1);

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
