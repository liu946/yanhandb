

// tablefieldgroup.js 
// table defination

var sys = require('../func/sys.js')
var table = sys.extend(require('../base/tablebase.js'),{
	name:"",
	fields:[],
	addedflag:false,
	// overwrite
	originfield:function () {
		return this.private_anydeep(this.fields,"");
	},
	// overwrite
	backendfield:function(){

		var backendfield = {};
		this.private_addonce();
		return this.private_backendanydeep(this.fields,backendfield);
	},
	private_addonce:function(){
		//只跑一次，增加字段
		this.fields =  this.addedflag ? this.fields : this.private_anydeep(this.fields,"");
		this.addedflag = true;
		return this.fields;
	},
	private_anydeep:function  (field,fatherPinYin) {

		for(var i in field){
			var pinyinstr = "";
			if(typeof(field[i]["namezh"])!="undefined"){
				pinyinstr = sys.pinyin(field[i]['namezh']);
				// todo
				// 长度检查
				// 重复检查
				field[i]["name"] = (fatherPinYin.replace(/[a-z]/g,"") + pinyinstr).substr(0,64);
			}
			// reduce
			if (typeof(field[i]["fields"])!="undefined") {
				this.private_anydeep(field[i]['fields'],fatherPinYin+pinyinstr);
			}
		}
		return field;
	},
	private_backendanydeep:function (field,backendfield) {
		for(var i in field) {
			if (typeof(field[i]["fields"]) != "undefined") {
					this.private_backendanydeep(field[i]['fields'], backendfield)
			} else {
				backendfield[field[i]['name']] = this.protected_backenddecodefield(field[i]);
			}
		}
		return backendfield;
	}

})


module.exports = table;
