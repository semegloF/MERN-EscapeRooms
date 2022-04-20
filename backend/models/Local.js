const mongoose = require('mongoose'); //Mongoose Model

const useradminSchema = new mongoose.Schema({
 
  local: String
});

module.exports = mongoose.model('useradmin', useradminSchema);