const { createStore } = require('redux');

const initialState = {
  count: 0,
};

const COUNT_INCREMENT = '[count] increment';
const COUNT_DECREMENT = '[count] decrement';
const COUNT_RESET = '[count] reset';

// Fonction pure
// - prédictive (si vous l'appelez avec les mêmes, elle donne le même retour)
// ex sum(1, 2) => 3
// - ne doit pas modifier ses paramètres d'entrées (array / object)
// - ne doit pas avoir de side-effect (faire une requete ajax, ecrire dans le storage)
function reducer(currentState = initialState, action) {
  // let nextState = currentState;

  // if (action.type === '[count] increment') {
  //   return {...state, count: state.count + 1};
  // }

  // if (action.type === '[count] decrement') {
  //   return {...state, count: state.count - 1};
  // }

  // if (action.type === '[count] reset') {
  //   return {...state, count: 0};
  // }

  // return nextState;
  switch (action.type) {
    case COUNT_INCREMENT:
      return { ...currentState, count: currentState.count + action.payload };
    case COUNT_DECREMENT:
      return { ...currentState, count: currentState.count - action.payload };
    case COUNT_RESET:
      return { ...currentState, count: 0 };
    default:
      return currentState;
  }
}

// reducer(undefined, {type: 'inconnue'}) => {count: 0}
// reducer(state, {type: 'increment'}) => nextState -> nextState !== state

const store = createStore(reducer);

// --------({type: 'x'})------({type: 'x'})-------({type: 'x'})...

// selector (fonction qui récupère les données du state)
// fonction pure
// memoized selector
function selectCount(state) {
  return state.count;
}

store.subscribe(() => {
  console.log(selectCount(store.getState()));
});

// action creator (fonction qui créé l'action)
function createAction(type) {
  return function (payload) {
    return {
      type,
      payload,
    };
  };
}

// function countIncrement(payload = 1) {
//   return { type: COUNT_INCREMENT, payload };
// }
const countIncrement = createAction(COUNT_INCREMENT);

function countDecrement(payload = 1) {
  return { type: COUNT_DECREMENT, payload };
}

function countReset() {
  return { type: COUNT_RESET };
}

store.dispatch(countIncrement(5));
store.dispatch(countIncrement());
store.dispatch(countDecrement());
store.dispatch(countIncrement());
store.dispatch(countReset());

// const events = new EventEmitter();
// events.emit({type: 'click'})
// events.subscribe(() => {});
