// Plutot que TodoForm et TodoList communiquent via AppComponent
// Leur injecter le Store NgRx
// Initialiser le state de cette façon
// {
//   todos: {
//     input: 'Contenu du champ input',
//     items: [{id: 123, title: 'ABC', completed: false}]
//   }
// }
//

// Créer 3 actions
// todoAdd -> qui ajoute au tableau (reducer fera comme handleNewTodo)
// todoDelete -> qui supprime du tableau (reducer fera comme handleDeleteTodo)
// todoModifyInput -> qui met à jour la clé todos.input du state

// Ecrire les selecteurs
// Afficher dans le composant TodoForm -> todos.input
// Dans TodoList  -> todos.items
// Temporairement retirer la stratégie OnPush

// Appeler store.dispatch depuis TodoForm (todoAdd, todoModifyInput)
// depuis TodoList (todoModifyInput)

// Important : ne pas connecter les TodoItem (perf)

// Pensez à installer les devtools
