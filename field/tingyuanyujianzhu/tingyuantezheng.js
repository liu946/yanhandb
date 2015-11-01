module.exports = {
	namezh:"庭院特征",
	require:{
			name:"JZJBXXJianZhuXingZhi",
			namezh:"建筑性质",
			value:1,
			valuezh:"居住建筑"
	},
	fields:
	[
	{
		namezh:"院落布局模式",
		backend:{
				type:"text",size:100
			},
		forend:{
			type:"select",
			option:{
				1:'前院',
				2:'后院',
				3:'前后院',
				4:'内院',
				5:'侧院',
			}
		}
	},
	{
		namezh:"地面铺装",
		backend:{
				type:"text",size:100
			},
		forend:{
			type:"select",
			option:{
				1:'土',
				2:'水泥',
				3:'粘土砖',
				4:'铺地砖',
				5:'其他',
			}
		}
	},

	{
		namezh:'院落功能',
		fields:[
			{
				namezh:"生产",
				backend:{
					type:"text",size:128
				},
				forend:{
					type:"selectmult",
					option:{
						1:'家禽养殖',
						2:'家畜养殖',
						3:'菜园',
						4:'仓房',
						5:'车库',
						6:'农机库',
						7:'其他',


					}
				},
			},
			{
				namezh:"生活",
				backend:{
					type:"text",size:128
				},
				forend:{
					type:"selectmult",
					option:{
						
						1:'做饭',
						2:'洗漱',
						3:'晾晒',
						4:'厕所',
						5:'沼气池',
						6:'其他',


					}
				},
			},
			{
				namezh:"娱乐",
				backend:{
					type:"text",size:128
				},
				forend:{
					type:"selectmult",
					option:{

						1:'棋牌桌',
						2:'座椅',
						3:'凉棚',
						4:'其他',


					}
				},
			},
			{
				namezh:"植被绿化",
				backend:{
					type:"text",size:128
				},
				forend:{
					type:"selectmult",
					option:{

						1:'乔木',
						2:'灌木',
						3:'花卉/草丛',
						4:'其他',

					}
				},
			},

		],
	},



	{
		namezh:'护栏与围墙',
		fields:[
			{
				namezh:"高度",
				backend:{
					type:"text",size:128
				},
				forend:{
					type:"select",
					option:{
						1:'0.5-1m',
						2:'1-1.5m',
						3:'1.5-2m',
						4:'＞2m',
					}
				},
			},
			{
				namezh:"材质",
				backend:{
					type:"text",size:128
				},
				forend:{
					type:"select",
					option:{
						1:'竹木',
						2:'砖石',
						3:'铁艺',
						4:'其他',
					}
				},
			},

		],
	},

	{
		namezh:"绿化面积",
		backend:{
			type:"text",size:128
		},
		forend:{
			type:"input",
			comment:"数字m2",
		},
	},
	{
		namezh:"绿化方式",
		backend:{
			type:"text",size:128
		},
		forend:{
			type:"selectmultornull",
			option:{
				1:'地面绿化',
				2:'墙体绿化',
				3:'屋顶绿化',
				4:'其他',
			}
		},
	},


	]
}