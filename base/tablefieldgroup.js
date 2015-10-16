

// tablefieldgroup.js 
// table defination

var sys = require('../func/sys.js')
var table = sys.extend(require('../base/tablebase.js'),{
	name:"",
	fields:[],

	// overwrite
	originfield:function () {
		// todo
		for(var group in this.fields){
			for (var i = this.fields[group].fields.length - 1; i >= 0; i--) {
				this.protected_addattribute(this.fields[group].fields[i])
			};
		}
		return this.fields;
	},
	// overwrite
	backendfield:function(){
		var backendfield = {}
		for(var group in this.fields){
			for (var i = this.fields[group].fields.length - 1; i >= 0; i--) {
				var pinyinstr = sys.pinyin(this.fields[group].fields[i]['namezh']);

				// todo 长度检查，重复检查
				backendfield[pinyinstr] = this.protected_backenddecodefield(this.fields[group].fields[i]);
			};
		}
		return backendfield;
	}

})


module.exports = table;
