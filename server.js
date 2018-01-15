var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var models = require("./app/models");
var env = require('dotenv').load();
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret : 'keyboard cat', resave : true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req,res){
    res.send('Welcome to node + mysql + passport + sequelize');
});

app.listen(5000, function(err){
    if(!err){
        console.log("Live");
    }else{
        console.log("error " + err);
    }
});

models.sequelize.sync().then(function(){
    console.log("Good to go !!! Database all set");    
}).catch(function(err){
    console.log("Encountered error" + err);
});
