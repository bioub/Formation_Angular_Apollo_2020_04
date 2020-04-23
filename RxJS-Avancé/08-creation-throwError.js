const { throwError } = require('rxjs');

// throwError(new Error('Erreur du serveur')).subscribe(
//   (val) => console.log('next', val),
//   (err) => console.log('error', err.message),
//   () => console.log('complete'),
// );

throwError(new Error('Erreur du serveur')).subscribe({
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err.message),
  complete: () => console.log('complete'),
});
