"use strict";

var express = require('express'),
  home = require('./routes/index.js'),
  user = require('./routes/user.js'),
  http = require('http'),
  path = require('path'),
  account = require('./routes/account.js');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());   
});

app.get('/', home.currentDriverStandings);
app.get('/constructor-standings', home.currentConstructorStandings);
app.get('/current-schedule', home.currentSchedule);
app.get('/login', account.login);
app.post('/loginuser', account.loginuser);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});