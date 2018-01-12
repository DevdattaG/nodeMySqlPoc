var express = require('express');
var app = express();

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