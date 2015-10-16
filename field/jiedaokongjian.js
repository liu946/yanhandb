

var sys = require('../func/sys.js')
module.exports = sys.extend(require('../base/tablefieldgroup.js'),
{
	name:"jiedaokongjian",
	namezh:"街道空间",
	fields: 	//	[{name:分类名,fields:[与基类field相同]},分类obj,:':':']',
	[
		{
			namezh:'绿化率',
			backend:{
				type:'number',
				
			},
			forend:{
				type:'input',
				defaultValue:'0',
				size:".2",
				comment:"百分比",
			},
		},
			
		{
			namezh:'照明覆盖率',
			backend:{
				type:'number',
				
			},
			forend:{
				type:'input',
				defaultValue:'0',
				size:".2",
				comment:"百分比",
			},
		},
		{
			namezh:'垃圾清运频率',
			backend:{
				type:'text',
				size:20,
			},
			forend:{
				type:'select',
				defaultValue:'null',
				option:{
					1:"＜1次/周" ,   2:"1~2次/周"  ,  3:"3~5次/周"  ,  4:"5次以上/周"
				}
			},
		},
	]
})

