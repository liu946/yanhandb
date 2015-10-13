
var sys = require('../func/sys.js')
var dbbase = require('../base/dbbase.js')


var db = sys.extend(dbbase,{
	name:'yanhandb',


})

console.log( sys.dump(db));

module.exports = db;