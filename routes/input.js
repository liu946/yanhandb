/** 
 * Filename: input.js
 * Date: 2015/09/19 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var express = require('express');
var router = express.Router();
var field = require('../conf/fielddef.js')
var sqlhelper = require('../func/sql.js')
var table = require('../model/table.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('input', { title: 'Express' });
});

router.get('/field',function (req, res, next) {
	res.json(field);
})

router.post('/update',function(req ,res ,next){
	console.log(req.body);
	res.send('save OK');
})

router.get('/edit/:id',function(req ,res ,next){
	res.render('edit',{ id: req.params.id})
})

router.get('/new',function(req ,res ,next){
	table.insertnull(function (id) {
		res.redirect('edit/'+id);
	})
})

router.get('/get/:id',function(req ,res ,next){
	table.getitem(req.params.id,function(item){
		res.json(item);
	})
})

module.exports = router;
