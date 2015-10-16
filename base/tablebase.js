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
		for (var i in this.fields) {
			var colume = this.fields[i];
			var pinyinstr = sys.pinyin(colume['namezh']);
			backendfield[pinyinstr] = this.protected_backenddecodefield(colume);
		};
		return backendfield;
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