// Richiede Express

var express = require("express");
var app = express();

// Richiede Jade

app.set('view engine', 'jade');

// Middleware per funzioni statiche

app.use(express.static('public'));

// Richiede FS

var fs = require("fs");

// Richiede Lodash

var _ = require("lodash");
var users = [];

// Pagine

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Ciao!', message: 'prova ricarica con Nodemon'
  })
})

var server = app.listen(3000, function() {
  console.log("Server running at http://localhost:" + server.address().port);
});
