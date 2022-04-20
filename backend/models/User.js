const mongoose = require('mongoose'); //Mongoose Model

const usersSchema = new mongoose.Schema({
  
  local: String,
  nom: String,
  prenom: String,
  username: String,
  email: String,
  password: String
});

module.exports = mongoose.model('user', usersSchema);