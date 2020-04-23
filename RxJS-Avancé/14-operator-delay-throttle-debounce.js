const { createInterface } = require('readline');
const { fromEvent } = require('rxjs');
const { delay, debounceTime, throttleTime } = require('rxjs/operators');


const interface = createInterface(process.stdin);

// interface.on('line', (line) => {
//   console.log('Saisie : ' + line);
// });

// Marble Graph (un tiret 250ms)
// -------(A)-----------(B)--(C)----
// delay(1000)
// -----------(A)-----------(B)--(C)----

// fromEvent(interface, 'line')
//   .pipe(
//     delay(1000)
//   )
//   .subscribe((val) => console.log('Saisie : ' + val));

// Marble Graph (un tiret 250ms)
// -------(A)-----------(B)--(C)----
// debounceTime(1000)
// -----------(A)-----------   --(C)----

// fromEvent(interface, 'line')
//   .pipe(
//     debounceTime(1000)
//   )
//   .subscribe((val) => console.log('Saisie : ' + val));

// Marble Graph (un tiret 250ms)
// -------(A)-----------(B)--(C)--(D)--
// throttleTime(1000)
// -------(A)-----------(B)--   --(D)--

fromEvent(interface, 'line')
  .pipe(
    throttleTime(1000)
  )
  .subscribe((val) => console.log('Saisie : ' + val));
