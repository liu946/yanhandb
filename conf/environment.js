var path     = require('path');
var express  = require('express');
var models   = require('../app/models/');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.set('views', path.join(__dirname, '../views'));
	app.set('view engine', 'jade');
    app.use(express.static( path.join(__dirname,"../public")))
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

    app.use(function (req, res, next) {
      models(function (err, db) {
        if (err) return next(err);

        req.models = db.models;
        req.db     = db;

        return next();
      });
    });
};
