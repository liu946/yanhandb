

var sys = require('../func/sys.js')
module.exports = sys.extend(require('../base/tablebase.js'),
{
	name:"kaichangkongjian",
	namezh:"开敞空间",
	fields: 	//	[{name:分类名,fields:[与基类field相同]},分类obj,:':':']',
	[

		{
			namezh:'功能',
			backend:{
				type:'text',
				size:20,
			},
			forend:{
				type:'select',
				defaultValue:'null',
				option:{
					1:"文体活动",    2:"休憩交往",    3:"展示",    4:"晒场",    5:"其他",

				}
			},
		},
		{
			namezh:'设施',
			backend:{
				type:'text',
				size:20,
			},
			forend:{
				type:'select',
				defaultValue:'null',
				option:{
					1:"雕塑",    2:"座椅",    3:"健身器械",    4:"其他",

				}
			},
		},
		{
			namezh:'活动组织频率',
			backend:{
				type:'text',
				size:20,
			},
			forend:{
				type:'select',
				defaultValue:'null',
				option:{
					1:"＜2次/周",    2:"2-5次/周",    3:"＞5次/周",

				}
			},
		},
		{
			namezh: "绿化面积",
			backend: {
				type: 'number',
			},
			forend: {
				type: 'input',
				defaultValue: '0',
				size: ".1",
			},
		}
	]
})

