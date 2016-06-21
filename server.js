/*jslint node:true */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var config = require('./config.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require('./routes')(app);

mongoose.connect(config.db.url);


app.listen(port);
console.log('server listening on port : ' + port);
