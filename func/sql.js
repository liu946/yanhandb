
var sql = {

	exsql : function (sqlstr,handle) {
		console.log('[SQL] '+sqlstr);
		var mysql      = require('mysql');
		var connection = mysql.createConnection({
			host     : global.conf.dbserver,
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
	},

}

module.exports = sql;