

var sys = require('../func/sys.js')
module.exports = sys.extend(require('../base/tablefieldgroup.js'),
{
	name:"biaozhixinggouzhuwu",
	namezh:"标志性构筑物",
	fields: 	//	[{name:分类名,fields:[与基类field相同]},分类obj,:':':']',
	[

	{
		namezh:"类型",
		backend:{
			type:"text",
		},
		forend:{
			type:'select',
			option:{
				1:'雕塑',
				//2:'建筑（若选择此项则输入对应建筑编号，不选择以下内容）',
				3:'市政设施',
				4:'其他',				
			}
		},
	},

	{
		namezh:"主题",
		backend:{
			type:"text",
		},
		forend:{
			type:'select',

			option:{
				1:'人物',
				2:'民族符号',
				3:'几何图形',
				4:'地方标志',
				5:'动植物',
				6:'其他'		
			}
		},
		require:{
			name:"LeiXing",
			value:'1'
		},
	},
	{
		namezh:"材质",
		backend:{
			type:"text",
		},
		forend:{
			type:'select',
			option:{
				1:'金属',
				2:'石材',
				3:'粘土砖',
				4:'塑料',
				5:'木材',
				6:'其他',		
			}
		},
	},
	{
		namezh:"与周边建筑高度比例关系",
		backend:{
			type:"text",
		},
		forend:{
			type:'select',
			option:{
				1:"＜1",
				2:"1-2",
				3:"2-3",
				4:"＞3",
			}
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
	}
	]
})

