

var sys = require('../func/sys.js')
module.exports = sys.extend(require('../base/tablefieldgroup.js'),
{
	name:"kaichangkongjian",
	namezh:"开敞空间",
	fields: 	//	[{name:分类名,fields:[与基类field相同]},分类obj,:':':']',
		[
			{
				namezh:'编号',
				backend:{
					type:'text',
					size:20,
				},
				forend:{
					type:'input',
					defaultValue:'null',
					option:{
						1:"＜1次/周" ,   2:"1~2次/周"  ,  3:"3~5次/周"  ,  4:"5次以上/周"
					},
					comment:"英文字母+数字（对每条街道编号后分别录入下列内容）"
				},
			},
			{
				namezh:'D/H',
				backend:{
					type:'text',
					size:20,
				},
				forend:{
					type:'select',
					defaultValue:'null',
					option:{
						1:'＜1',2:'1-2',3:'2-3',4:'3-6',5:'大于6',
					}
				},
			},
			{
				namezh:'铺地材质',
				backend:{
					type:'text',
					size:20,
				},
				forend:{
					type:'select',
					defaultValue:'null',
					option:{
						1:'裸土',2:'水泥',3:'沥青',4:'石子',5:'红砖',6:'铺地砖',7:'其他'
					}
				},
			},
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
			{
				namezh:"垃圾箱",
				fields:
					[
						{
							namezh:"数量",
							backend:{
								type:'integer',

							},
							forend:{
								type:'input',
								defaultValue:'0',
								comment:"若“无”录入0",
							},
						},
						{
							namezh:"颜色",
							backend:{
								type:"text",
							},
							forend:{
								type:'CCS',

							},
						},
						{
							namezh:"服务半径",
							backend:{
								type:'integer',

							},
							forend:{
								type:'input',
								defaultValue:'0',
								comment:"数字m",
							},
						},

					]
			},
			{
				namezh:"垃圾箱",
				fields:
					[
						{
							namezh:"座椅",
							backend:{
								type:'integer',

							},
							forend:{
								type:'input',
								defaultValue:'0',
								comment:"若“无”录入0",
							},
						},
						{
							namezh:"颜色",
							backend:{
								type:"text",
							},
							forend:{
								type:'CCS',

							},
						},
						{
							namezh:"服务半径",
							backend:{
								type:'integer',

							},
							forend:{
								type:'input',
								defaultValue:'0',
								comment:"数字m",
							},
						},

					]
			},
			{
				namezh:"垃圾箱",
				fields:
					[
						{
							namezh:"树池",
							backend:{
								type:'integer',

							},
							forend:{
								type:'input',
								defaultValue:'0',
								comment:"若“无”录入0",
							},
						},
						{
							namezh:"颜色",
							backend:{
								type:"text",
							},
							forend:{
								type:'CCS',

							},
						},

					]
			},
			{
				namezh:'活动组织',
				backend:{
					type:'text',
					size:20,
				},
				forend:{
					type:'select',
					defaultValue:'null',
					option:{
						1:"＜2次/周" ,   2:"2-5次/周"  ,  3:"＞5次/周"
					}
				},
			},

		]
})
