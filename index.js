// Richiede Express

var express = require("express");
var app = express();

// Richiede BodyParser

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Richiede EJS view engine

app.set('view engine', 'ejs');

// Middleware per funzioni statiche

app.use('/assets', express.static('assets'));

// Pagine

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contact', function (req, res) {
  res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res) {
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

// Post request per pagina contact

app.post('/contact', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render('contact-success', { data: req.body });
});

// Server Listen

var server = app.listen(3000, function() {
  console.log("Server running at http://localhost:" + server.address().port);
});