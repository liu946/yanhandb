/** 
 * Filename: dbgenerator.js
 * Date: 2015/09/19 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var express = require('express');
var router = express.Router();
var sqlhelper = require('../func/sql.js')
var table = require('../model/table.js')

/* Generator the db and table */
router.get('/', function(req, res, next) {
	var ans = "";
	// create db
	var cdbsql = "CREATE DATABASE IF NOT EXISTS "+global.conf.dbname+" DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
	ans+=cdbsql+"</br>";
	sqlhelper.exsql(cdbsql,function(rst,field){
		

		// create tables 
		var ctbsql = "CREATE TABLE IF NOT EXISTS "+global.conf.dbname+"."+global.conf.dbtable;
		ctbsql+="("+
			"id int(11) not null primary key auto_increment"+
			table.returngeneratestr()
			+");";
		sqlhelper.exsql(ctbsql,function(rst,field){
			ans+=ctbsql;
			res.render('generator', { sql: ans });
		});
	});
});

module.exports = router;

