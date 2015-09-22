
var sqlhelper = require('../func/sql.js')

function remove (str,pattern) {
	str.replace(/str/)
}

var table = {
	
	tablename : global.conf.dbtable,

	returngeneratestr : function () {
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

	},
	usedb : function(callback){
		var usesql = "USE "+global.conf.dbname+";";
		sqlhelper.exsql(usesql,function(rst,field){
			callback();
		});
	},

	insertnull:function(callback){ 
			var insertsql = "insert into "+global.conf.dbtable+" () values ();";
			var getmaxsql = "select max(id) as id from "+global.conf.dbtable+";";
			var maxhandle = function(rows, fields){
					callback(rows[0].id);
				}
			sqlhelper.exsqllist(["USE "+global.conf.dbname+";",insertsql,getmaxsql],[,,maxhandle]);
	},
	getitem:function(id,callback){
		// 注入危险
		sqlhelper.exsql('SELECT * FROM '+global.conf.dbname+"."+global.conf.dbtable+" WHERE `id`="+id+" LIMIT 1 ;",function(rows, fields){
			callback(rows[0]);
		});
	}
	update:function  (id,obj,callback) {
		var field = "UPDATE "+this.tablename +" SET ";
		for (var i in obj) {
			field += " "+i+" = '"+remove(obj[i],"'")+"',";
		};
		field += " WHERE id="+id+";";

		sqlhelper.exsqllist(['USE '+global.conf.dbname,field],[,callback])

	}


}

module.exports = table;