const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

// Marble Graph (un tiret vaut 250ms)
// ----(0)----(1)----(2)----(3)---.....
// take(3)
// ----(0)----(1)----(2)|

// voir aussi takeUntil, takeLast, takeWhile

interval(1000)
  .pipe(take(3))
  .subscribe((val) => {
    console.log(val);
  });
