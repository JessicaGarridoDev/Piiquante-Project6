//*Démarrage du serveur

// On crée le programme qui va écouter et attendre des requêtes http et qui va y répondre
const http = require('http'); // On importe le package http de node
const app = require('./app'); // On importe app.js


app.set('port', process.env.PORT || 3000)
const server = http.createServer(app) // app est une fonction qui renvoi une requête & réponse

server.listen(process.env.PORT || 3000) // Maintenant que le serveur est prêt il doit attendre et écouter les requêtes envoyés. Par défault on utilise le port 3000 mais quand il est pas disponible on utilise une variable "environnement"

//* Fin démarrage du serveur 

