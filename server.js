//*Démarrage du serveur

// On crée le programme qui va écouter et attendre des requêtes http et qui va y répondre
const http = require('http'); // On importe le package http de node

const server = http.createServer((req,res)=> { // Maintenant on peut créer le serveur. 2 arguments : requête et réponse
    res.readableEnded('Voilà la réponse du serveur'); // création de fonction. Pour l'instant on envoit juste une réponse
})

server.listen(process.env.PORT || 3000) // Maintenant que le serveur est prêt il doit attendre et écouter les requêtes envoyés. Par défault on utilise le port 3000 mais quand il est pas disponible on utilise une variable "environnement"

//* Fin démarrage du serveur 

