// equivalent Array.from()

const { from } = require('rxjs');


// Marble graph
// of(['A', 'B', 'C'])
// (['A', 'B', 'C'])|
// from(['A', 'B', 'C'])
// ('A')('B')('C')|


from(['A', 'B', 'C']).subscribe((letter) => {
  console.log(letter);
});
