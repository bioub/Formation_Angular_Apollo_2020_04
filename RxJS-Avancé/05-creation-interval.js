const { interval } = require('rxjs');

interval(1000)
  .subscribe(() => console.log('1s'));
