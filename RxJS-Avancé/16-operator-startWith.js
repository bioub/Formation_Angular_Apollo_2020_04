const { interval } = require('rxjs');
const { startWith } = require('rxjs/operators');

interval(1000)
  .pipe(
    startWith('X')
  )
  .subscribe(() => console.log(new Date().toLocaleTimeString()));

//  ----x----x----x----x----...
// startWith('x')
// x----x----x----x----x----...
