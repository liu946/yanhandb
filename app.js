var express = require('express');
var orm = require('orm');
var fs = require('fs')
// conf
global.conf = require('./conf/conf.js')

var env = require('./conf/environment')
var routes = require('./conf/routes');



var app = express();
env(app)
routes(app)
app.get('/', function(req, res){
  res.redirect('/input/view/index');
})
app.use(express.static('public'));
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
