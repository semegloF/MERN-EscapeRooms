require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const passport = require("passport");

const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(session({ secret: 'somevalue' }));
const Admin = require("./models/Admin");
const Local = require("./models/Local");
const User = require("./models/User");
const Feedback = require("./models/Feedback");


const connection = mongoose.connection;

mongoose.connect('mongodb+srv:COPYPASTEURURLHERE',{ useUnifiedTopology: true, useNewUrlParser: true } );
//mongoose.connect('mongodb://localhost:27017/tesst',{  useUnifiedTopology:true , useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

// ------------------- MONGOOSE CONNECT -------------------

mongoose.set("useCreateIndex", true); 

// ------------------- MIDDLEWARE ------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
	cors({
		//origin: "http://10.30.40.121:3000", // <-- location of the react app were connecting to
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}))
app.use(cookieParser(process.env.SECRET))
app.use(passport.initialize());
app.use(passport.session());

// ------------------ PASSPORT CONFIG --------------------

passport.use(Admin.createStrategy());

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	Admin.findById(id, function(err, user) {
		done(err, user);
	});
});


app.get('/Select', (req,res) => {
	User.find()
	.exec()
	.then(user => res.status(200).json(user));});

	app.get('/Selectcomment', (req,res) => {
		Feedback.find()
		.exec()
		.then(comment => res.status(200).json(comment));});
  
  app.get('/Select/:id',(req,res,next)=>{
  
	var id = req.params.id;
	User.findById(id).then(x => {
	  if (!x){
		return res.status(404).end();
	  }
	  return res.status(200).json(x);
	}).catch (err=> next(err));
	});

  
	app.get('/Selectt', (req,res) => {
	  Local.find()
		.then(deps => res.json(deps))
		.catch(err => res.status(400).json('Error: ' + err));
	});
	
	   
		app.get('/Selecttcomment', (req,res) => {
			Feedback.find()
			.then(comments => res.json(comments))
			.catch(err => res.status(400).json('Error: ' + err));
		});

	  app.post('/Update/:id',(req,res)=> {
		const id = req.params.id;
		const update = req.body;
		 User.findByIdAndUpdate(id,update,(err,user)=>{
	if(err){ return res.status(500).json(err); }
	res.status(202).json ({msg : `Le User avec l id ${user._id} est modifie avec succes! `});}); });
	
app.post('/Add',(req,res) => {
	console.log('req.body', req.body);
	const add = new User(req.body);
	
	add.save((err, add)=> {
	if (err) {
	  return res.status(500).json(err);	
	}
	res.status(201).json(add);
	});
	});


app.post('/Addlocal',(req,res) => {
		console.log('req.body', req.body);
		const addlocal = new Local(req.body);
		
		addlocal.save((err, addlocal)=> {
		if (err) {
		  return res.status(500).json(err);
		}
		res.status(201).json(addlocal);
		});
		});
		   
		
		app.post('/Addcomment',(req,res) => {
			console.log('req.body', req.body);
			const addcomment = new Feedback(req.body);
			
			addcomment.save((err, addcomment)=> {
			if (err) {
			  return res.status(500).json(err);
			}
			res.status(201).json(addcomment);
			});
			});



app.post("/loginadmin", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			throw err;
		}
		if (!user) {
			res.status(401).send(info);
		}
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.redirect('/selectadmin');
			});
		}
	})(req, res, next);
});


app.post("/registeradmin", (req, res, next) => {
	const {username, password } = req.body;

	Admin.register({username},password, (err, user) => {


		if (err) {
			console.log(err);
			res.status(400).send(err);
		} else {
			passport.authenticate("local")(req, res, () => {
				res.status(200).send({ msg: "Créé et connecté avec succès...", user })
			})
			
		}
	})
})


app.delete('/Delete/:id', (req,res)=> {
	const id = req.params.id;
	User.findByIdAndDelete(id, (err, user)=>{  
	  if (err) { return res.status(500).json(err); }
	  res.status(202).json ({msg : `L'utilisateur avec l id ${user._id} est supprimee avec succes ! `});});  });

	  
app.delete('/Deletelocal/:id', (req,res)=> {
	const id = req.params.id;
	Local.findByIdAndDelete(id, (err, user)=>{  
	  if (err) { return res.status(500).json(err); }
	  res.status(202).json ({msg : `L'utilisateur avec l id ${user._id} est supprimee avec succes ! `});});  });

	  app.delete('/Deletecomment/:id', (req,res)=> {
		const id = req.params.id;
		Feedback.findByIdAndDelete(id, (err, user)=>{  
		  if (err) { return res.status(500).json(err); }
		  res.status(202).json ({msg : `L'utilisateur avec l id ${user._id} est supprimee avec succes ! `});});  });

app.get('/logoutadmin', (req, res) => {
	req.logout();
	res.status(200).send('Déconnexion réussie...');
})

app.get("/selectadmin", (req, res) => {
	res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

// ----------------- SERVER ------------------
app.listen (3528,()=>{ console.log ("j'écoute le port 3528 !"); });
connection.once('open',()=>{ console.log('Connected to MongoDB') });
