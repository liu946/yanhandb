var sys = require('../func/sys.js')
var childdir = './tingyuanyujianzhu/'
var fs = require('fs')
var tb = sys.extend(require('../base/tablefieldgroup.js'),
    {
    	name:"tingyuanyujianzhu",
		namezh:"庭院与建筑",
		fields:
		[
			

		]
    })
fs.readdir(path, function (err,files) {
	// body...
	for (var i = files.length - 1; i >= 0; i--) {
		this.fields.push(require(childdir+files[i]))
	};
});

module.exports = tb;