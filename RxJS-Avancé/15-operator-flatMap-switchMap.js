const { createInterface } = require('readline');
const { Observable, fromEvent } = require('rxjs');
const { flatMap, switchMap } = require('rxjs/operators');

function asyncLetter(letter) {
  const delay = Math.random() * 3000;
  return new Observable((observer) => {
    setTimeout(() => {
      observer.next({ letter, delay });
      observer.complete();
    }, delay);
  });
}

const interface = createInterface(process.stdin);

// -----(A)------(B)-----(C)-----....
// -----------(A)-------------(C)-(B)--....
// switchMap((line) => asyncLetter(line))
// -----------(A)-------------(C)-   --....


fromEvent(interface, 'line')
  .pipe(
    switchMap((line) => asyncLetter(line))
  )
  .subscribe((val) => console.log(val));
