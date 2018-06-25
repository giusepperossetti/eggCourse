// Richiede Express

var express = require("express");
var app = express();

// Richiede EJS

app.set('view engine', 'ejs');

// Middleware per funzioni statiche

app.use(express.static('public'));

// Richiede FS

var fs = require("fs");

// Richiede Lodash

var _ = require("lodash");
var users = [];

// Pagine

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res) {
  res.render('profile');
});

// Server Listen

var server = app.listen(3000, function() {
  console.log("Server running at http://localhost:" + server.address().port);
});