const { interval } = require('rxjs');
const { take, reduce } = require('rxjs/operators');

// const nbs = [1, 2, 3];

// acc: 0, nb: 1 => 1
// acc: 1, nb: 2 => 3
// acc: 3, nb: 3 => 6

// console.log(nbs.reduce((acc, nb) => acc + nb, 0));

// Marble Graph (un tiret vaut 250ms)
// ----(0)----(1)----(2)----(3)---.....
// take(3)
// ----(0)----(1)----(2)|
// reduce((acc, nb) => acc + nb, 0)
// ------------------   (6)|

// voir aussi takeUntil, takeLast, takeWhile

interval(1000)
  .pipe(
    take(3),
    reduce((acc, nb) => acc + nb, 0),
  )
  .subscribe((val) => {
    console.log(val);
  });
