const { interval } = require('rxjs');
const { filter } = require('rxjs/operators');

// Marble Graph (un tiret vaut 250ms)
// ----(0)----(1)----(2)----(3)---.....
// filter((val) => val % 2 === 0)
// ----(0)----   ----(2)----   ---.....


interval(1000)
  .pipe(filter((val) => val % 2 === 0))
  .subscribe((val) => {
    console.log(val);
  });
