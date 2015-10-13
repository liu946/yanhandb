
var sys = {
	dump:function (obj){
		return this.dumpbase(obj,'\n');
	},
	dumphtml:function (obj){
		return this.dumpbase(obj,'<br>');
	},
	dumpbase:function (obj,pattern) {
		var output = "";
		if (typeof(obj)!='object') {return obj};
		for(var i in obj){  
			output+=(i+" = "+ typeof(obj[i])=='object' ? this.dumpbase(obj[i],pattern) : obj[i] + pattern); 
		}  
		return output;
		// return JSON.stringify(obj);
	},
	clone:function(obj) {
 		var _f = function() {};
		//这句是原型式继承最核心的地方，函数的原型对象为对象字面量
		_f.prototype = obj;
		return new _f;
	},
	extend:function(obj,addobj){
		var _f = this.clone(obj);
		for (var i in addobj) {
			_f[i]=addobj[i];
		};
		return this.clone(_f);
	}

}
module.exports = sys;