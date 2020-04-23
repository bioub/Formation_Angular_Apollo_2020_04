// function fakeRequest() {
//   return new Promise((resolve) => {
//     resolve(['A', 'B', 'C']);
//   });
// }

// function fakeRequest() {
//   return Promise.resolve(['A', 'B', 'C']);
// }

const { of } = require('rxjs');

function fakeRequest() {
  return of(['A', 'B', 'C']);
}

fakeRequest().subscribe((data) => {
  console.log(data);
});
