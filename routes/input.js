/** 
 * Filename: input.js
 * Date: 2015/09/19 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var express = require('express');
var router = express.Router();
var field = require('../conf/fielddef.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('input', { title: 'Express' });
});

router.get('/field',function (req, res, next) {
	res.json(field);
})

router.post('/update',function(req ,res ,next){

})

router.post('/edit',function(req ,res ,next){

})

router.post('/new',function(req ,res ,next){

})

module.exports = router;
