// tablebase.js

var sys = require('../func/sys.js')
var table = {
	name:'',
	fields:
	[
		
	],
	// overwrite
	originfield:function () {

		for (var i = fields.length - 1; i >= 0; i--) {
			this.protected_addattribute(fields[i])
		};
		return this.field;
	},

	backendfield:function(){
		var backendfield = {}
		// todo
		throw err('not ended method!')
	},
	// protected
	protected_addattribute:function(sigalitemobj){
		sigalitemobj['name'] = sys.pinyin(sigalitemobj['zhname'])
	},
	// protected
	protected_backenddecodefield:function (sigalitemobj) {
		var type=sigalitemobj.backend
		return type;
	}
}

module.exports = table;