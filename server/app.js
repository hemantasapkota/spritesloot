/**
 * Module dependencies.
 */
var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config');

//Connect to the DB
var db = mongoose.connect('mongodb://nodejitsu:55b19a3a28c916b7d586b70fe7147098@linus.mongohq.com:10055/nodejitsudb514777344');
//var db = mongoose.connect('mongodb://hemantasapkota:Quantum@superposition9ilove@alex.mongohq.com:10046/spritesloot');
//var db = mongoose.connect(config.db);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({
    uploadDir:'./public/',
    keepExtensions: true
  }));

  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, './client/')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.use('/public', express.static(path.join(__dirname, '../server/public/')));

require('./config/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
