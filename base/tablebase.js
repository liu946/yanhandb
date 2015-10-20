// tablebase.js

var sys = require('../func/sys.js')
var table = {
	name:'',
	fields:
	[
		
	],
	// overwrite
	originfield:function () {

		for (var i = this.fields.length - 1; i >= 0; i--) {
			this.protected_addattribute(this.fields[i])
		};
		return this.fields;
	},

	backendfield:function(){
		var backendfield = {}

		for (var i in this.fields) {
			var colume = this.fields[i];
			var pinyinstr = (sys.pinyin(colume['namezh'])).substr(0,64);
			backendfield[pinyinstr] = this.protected_backenddecodefield(colume);
		};
		return backendfield;

	},
	// protected
	protected_addattribute:function(sigalitemobj){
		sigalitemobj['name'] = (sys.pinyin(sigalitemobj['namezh'])).substr(0,64)
	},
	// protected
	protected_backenddecodefield:function (sigalitemobj) {
		var type=sigalitemobj.backend
		return type;
	}
}

module.exports = table;