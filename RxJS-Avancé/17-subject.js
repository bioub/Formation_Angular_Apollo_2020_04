const { interval, Subject } = require('rxjs');

const interval$ = interval(1000);

const subject$ = new Subject();

interval$.subscribe(subject$);

subject$.subscribe((count) => console.log('A', count));

setTimeout(() => {
  subject$.subscribe((count) => console.log('B', count));
}, 2500);


//       interval$
//           ^
//           |
//        subject$
//       /        \
//      log       log





// observable -> subject$.subscribe
// observer -> subject$.next|error|
