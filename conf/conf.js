var path = require('path')
conf = {
	path       : path.normalize(path.join(__dirname, '..')),
	port       : process.env.NODE_PORT || 3000,
	database   : {
	    protocol : "mysql", // or "mysql"
	    query    : { pool: true },
	    host     : "127.0.0.1",
	    database : "yanhandb",
	    user     : "root",
	    password : "123456"
	},
	db:{
		engine:'mysql',
		host:"localhost",
		name:"yanhandb",
		username:"root",
		password:"123456",
		ormstring:function () {
			return this.engine+"://"+this.username+":"+this.password+"@"+this.host+"/"+this.name
		}
	},
}

module.exports = conf;