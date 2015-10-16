

// tablefieldgroup.js 
// table defination

var sys = require('../func/sys.js')
var table = sys.extend(require('../base/tablebase.js'),{
	name:"",
	fields:[],

	// overwrite
	originfield:function () {

		return this.private_anydeep(this.fields);

	},
	// overwrite
	backendfield:function(){
		var backendfield = {}

		return this.private_backendanydeep(this.fields,backendfield);
	},
	private_anydeep:function  (field) {
		for(var i in field){
			if(typeof(field[i]["namezh"])!="undefined"){
				var pinyinstr = sys.pinyin(field[i]['namezh']);
				// todo
				// 长度检查
				// 重复检查
				field[i]["name"] = pinyinstr;
			}
			// reduce
			if (typeof(field[i]["fields"])!="undefined") {
					this.private_anydeep(field[i]['fields'])
			}
		}

		return field;
	},
	private_backendanydeep:function (field,backendfield) {
		for(var i in field) {

			if (typeof(field[i]["fields"]) != "undefined") {

					this.private_backendanydeep(field[i]['fields'], backendfield)

			} else {
				var pinyinstr = sys.pinyin(field[i]['namezh']);
				// todo
				// 长度检查
				// 重复检查
				backendfield[pinyinstr] = this.protected_backenddecodefield(field[i]);
			}
		}
		return backendfield;
	}

})


module.exports = table;
