
var controllers = require('../app/controllers')
var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
	res.render('welcome');
});
router.get('/welcome',function(req,res,next){
	res.render('welcome');
});
router.get('/guide',function(req,res,next){
	res.render('guide');
});


module.exports = function (app) {
	app.use('/input', controllers.input);
	app.use('/dbgenerator', controllers.dbgenerator);
	app.use('/test', controllers.test);
	app.use('/statistics',controllers.statistics);
	app.use('/',router);

};
