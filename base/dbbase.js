//dbdef.js

var fs = require('fs');
var sys = require('../func/sys.js')

var dbbase = {
	name:"",
	comment:"",
	deft:{
		CHARSET: 'utf8',
		COLLATE: 'utf8_general_ci',
	},
	table:[],

	// 加载表方法
	// private
	loadtable: function () {
		// body...

		fs.readdir('./table',function (err, data) {
			if (err) throw err;
			for (var i = data.length - 1; i >= 0; i--) {
				table.push(require(data[i]))
			};

		})
	}
}



module.exports = dbbase;