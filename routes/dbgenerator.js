/** 
 * Filename: dbgenerator.js
 * Date: 2015/09/19 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var express = require('express');
var router = express.Router();



// //加载mysql Module
// var Client = require('mysql').Client,
    
//    	client = new Client(),
// 　　 　 //要创建的数据库名
//     TEST_DATABASE = globle.conf.dbname,
//     //要创建的表名
//     TEST_TABLE = 'test';

// //用户名
// client.user = 'root';
// //密码
// client.password = 'root';
// //创建连接
// client.connect();

// client.query('CREATE DATABASE '+TEST_DATABASE, function(err) {
//   if (err && err.number != Client.ERROR_DB_CREATE_EXISTS) {
//     throw err;
//   }
// });
function exsql (sqlstr,handle) {
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : global.conf.dbuser,
	  password : global.conf.dbpwd
	});
	//创建连接
	connection.connect();

	connection.query(sqlstr, function(err, results, fields) {
	  if (err) {
	    throw err;
	  }
	  if (typeof(handle) != "undefined") {
	  	//console.log(typeof(handle))
	  	handle(results,fields);
	  };
	});
	connection.end();
}
function returngeneratestr () {
	var data = require('../conf/fielddef.js')
	var str='';
	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < data[i]["childfield"].length ; j++) {
			str+=',';
			str+=data[i]["childfield"][j]['field']+' ';
			switch(data[i]["childfield"][j]['datatype'])
			{
				case 'inputtext':
				case "selecttext":
					str+='varchar('+data[i]["childfield"][j]["datasize"]+') ';
				break;
				case "mutiselecttext":
					str+='varchar(200) ';
				break;
				case "double":
					str+='double ';
				break;
				case "int":
					str+='int(20) '
				break;
				case "CCS":
					str+='varchar(20) '
				break;
				case "bool":
					str+='int(4) '
				break;
				default:
					throw "ERROR,UNDEFINED TYPE";
			}
			if (data[i]["childfield"][j].hasOwnProperty('default')) {
				str+="NOT NULL DEFAULT '"+data[i]["childfield"][j]['default']+"' ";
			};
			var comment = data[i]['classname']+"--"+data[i]["childfield"][j]["fieldname"];
			if (data[i]["childfield"][j].hasOwnProperty('comment')) {
				comment+='--单位（'+data[i]["childfield"][j]['comment']+'）';
			};
			str+="COMMENT '"+comment+"' ";

		};
	};
	return str;

}
/* Generator the db and table */
router.get('/', function(req, res, next) {
	var ans = "";
	// create db
	var cdbsql = "CREATE DATABASE IF NOT EXISTS "+global.conf.dbname+" DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
	ans+=cdbsql+"</br>";
	exsql(cdbsql,function(rst,field){
		

		// create tables 
		var ctbsql = "CREATE TABLE IF NOT EXISTS "+global.conf.dbname+"."+global.conf.dbtable;
		ctbsql+="("+
			"id int(11) not null primary key auto_increment"+
			returngeneratestr()
			+");";
		exsql(ctbsql,function(rst,field){
			ans+=ctbsql;
			res.render('generator', { sql: ans });
		});
	});
});

module.exports = router;

