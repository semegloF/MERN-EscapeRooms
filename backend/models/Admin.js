const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new mongoose.Schema({
	
	password: String,
	username: String

})

adminSchema.plugin(passportLocalMongoose);

module.exports  = mongoose.model("Admin", adminSchema);