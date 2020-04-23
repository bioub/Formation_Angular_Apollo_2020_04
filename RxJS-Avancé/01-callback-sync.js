const data = [
  {
    id: 123,
    title: 'ABC',
    completed: true,
  },
  {
    id: 456,
    title: 'DEF',
    completed: false,
  },
  {
    id: 789,
    title: 'GHI',
    completed: true,
  },
];

// ES5 ~ 2009 IE9+
// Programmation fonctionnelle (de tableaux)
data
  .filter((el) => el.completed)
  .map((el) => el.title)
  .forEach((el) => console.log(el))

console.log('FIN');

// pile d'appels
// ^
// |
// |                         lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +-------------------------------------> temps
//                           ABC  GHI  FIN
