var express = require("express");
var app = express();

var fs = require("fs");
var _ = require("lodash");
var users = [];

app.get("/", function(req, res) {
  res.send("Bonjour");
});

app.get("/yo", function(req, res) {
  res.send("YO!");
});

app.get("/prova", function(req, res) {
  res.send("Questa è una prova");
});

var server = app.listen(3000, function() {
  console.log("Server running at http://localhost:" + server.address().port);
});
