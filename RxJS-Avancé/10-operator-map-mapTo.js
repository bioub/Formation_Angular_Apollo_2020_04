const { interval } = require('rxjs');
const { map, mapTo } = require('rxjs/operators');

// Marble Graph (un tiret vaut 250ms)
// ----(0)----(1)----(2)----(3)---.....
// map((val) => val * 2)
// ----(0)----(2)----(4)----(6)---.....

// interval(1000)
//   .pipe(map((val) => val * 2))
//   .subscribe((val) => {
//     console.log(val);
//   });

// Marble Graph (un tiret vaut 250ms)
// ----(0)----(1)----(2)----(3)---.....
// map(() => 'X') ou mapTo('X')
// ----(X)----(X)----(X)----(X)---.....

interval(1000)
  .pipe(mapTo('X'))
  .subscribe((val) => {
    console.log(val);
  });
