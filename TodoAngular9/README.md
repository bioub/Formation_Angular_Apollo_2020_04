# Exercices Rappels

## Ajouter un bouton moins dans ItemComponent

Au clic de ce bouton remonter via un @Output à liste
Au niveau de la liste, remonter via un @Output au 
composant App (supprimer du tableau dans App)

## Créer un service TodoService

Créer une méthode getAll qui envoit une requete GET
vers https://jsonplaceholder.typicode.com/todos
(transformer le tableau d'objet en tableau de string dans le service)

Dans le composant App, appeler votre méthode getAll
pour préremplir l'application avec les todos du serveur

Pensez à importer HttpClientModule (package @angular/common/http) depuis AppModule (pour avoir accès à HttpClient)
