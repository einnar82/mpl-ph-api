var express = require('express');
var team = require('./team');

var app = express();

app.use("/all-teams",team);

module.exports = app;
