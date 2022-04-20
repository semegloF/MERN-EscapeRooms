const mongoose = require('mongoose'); //Mongoose Model
const feedbackSchema = new mongoose.Schema({
 
	name: String,
	comment: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);