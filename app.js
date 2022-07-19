const express = require('express'); // importation d'express
const app = express(); // création d'une constante qui ne contiendra rien pour l'instant

app.use((req, res) => { // Permettera à notre application de répondre aux requêtes
    res.json({message : 'La requête a bien été reçue'});
});

module.exports = app; // exportation de la constante pour pouvoir y accéder depuis les autres fichiers de notre projet