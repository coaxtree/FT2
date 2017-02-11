var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var fs = require('fs');

//var dbconfig = require('./config/db.config');
var routes = require('./routes/index');
//var login = require("./routes/login.db.js");

var app = express();

var morgan = require('morgan');
var db = require('./config/db.config');

morgan.token('res', function getId(res) {
	return res;
});

var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
// setup the logger
app.use(morgan(':req[body] :res[body]', {stream: accessLogStream}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// to handle session eg: user login should not to be logout after browser closed
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static(path.join(__dirname, 'client')));

//app.use(require('./routes/login.db'));
app.use('/', routes);
app.use('/', db);
//app.use('/', login);
//require('/')(app, db);
//app.use('/', passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;