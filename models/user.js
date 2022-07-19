const mongoose = require('mongoose'); // On importe mongoose
const uniqueValidator = require('mongoose-unique-validator'); // Pour éviter qu eplusieurs utilisateurs aient la même adresse mail

const userSchema = mongoose.Schema({ // On crée notre shéma avec les informations que l'on va stocker
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator); // On applique le validatur au shéma

module.exports = mongoose.model('User', userSchema); // On exporte le shéma sous forme de modèle