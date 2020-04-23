const { Observable, forkJoin } = require('rxjs');

function asyncLetter(letter) {
  const delay = Math.random() * 3000;
  return new Observable((observer) => {
    setTimeout(() => {
      observer.next({ letter, delay });
      observer.complete();
    }, delay);
  });
}

// asyncLetter('A').then((res) => console.log(res));
// asyncLetter('B').then((res) => console.log(res));
// asyncLetter('C').then((res) => console.log(res));
// asyncLetter('D').then((res) => console.log(res));

// (async () => {
//   const { letter, delay } = await asyncLetter('A');
//   console.log(letter, delay);
// })();

// Promise.all([
//   asyncLetter('A'),
//   asyncLetter('B'),
//   asyncLetter('C'),
//   asyncLetter('D'),
// ]).then((responses) => {
//   console.log(responses);
// });

forkJoin([
  asyncLetter('A'),
  asyncLetter('B'),
  asyncLetter('C'),
  asyncLetter('D'),
]).subscribe((responses) => {
  console.log(responses);
});
