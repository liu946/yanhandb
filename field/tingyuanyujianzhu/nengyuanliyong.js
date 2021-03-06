module.exports = 
{
	namezh:"能源利用",
	fields:
	[

	{
		namezh:"供暖",
		fields:
		[
		{
			namezh:"燃料类型",
			fields:
			[
			{
				namezh:"电",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'°',
				},
			},
			{
				namezh:"煤",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'t',
				},
			},
			{
				namezh:"木柴",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'t',
				},
			},
			{
				namezh:"秸秆",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'t',
				},
			},
			{
				namezh:"其他",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'',
				},
			}
			]
		},
		// {
		// 	namezh:"锅炉热效率",
		// 	require:{
		// 		namezh:"集中供暖",
		// 		name:"JZSNHJRHJCNJiZhongGongNuan",
		// 		value:1,
		// 		valuezh:'是',
		// 	},
		// 	fields:
		// 	[
		// 	{
		// 		namezh:"燃煤、烟煤",
		// 		backend:{
		// 			type:"text",size:100
		// 		},
		// 		forend:{
		// 			type:"input",
		// 			comment:'%（有集中供暖时填写）',
		// 		},
		// 	},
		// 	{
		// 		namezh:"燃油、燃气",
		// 		backend:{
		// 			type:"text",size:100
		// 		},
		// 		forend:{
		// 			type:"input",
		// 			comment:'%（有集中供暖时填写）',
		// 		},
		// 	}
		// 	]
		// },
		
		]
	},
	
	{
		namezh:"可再生能源的有效利用",
		fields:
		[
		{
			namezh:"可再生能源的直接利用",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"采光利用：方案设计中包括利用自然光取代照明设备的自然采光系统。例如：反光板、天窗、侧高窗等、",
					2:"通风利用：方案设计中包括有效的自然通风系统。例如：自动风门、夜间通风、中庭通风、太阳烟囱、通风塔等、",
					3:"地热利用：方案设计中包括可替代冷热源和空调设备、减小空调负荷的地热利用系统。例如：地下埋管、地道等、",
					4:"其他：规划有其他有效的直接利用可再生能源的系统。",
				}
			}
		},
		{
			namezh:"可再生能源的转换利用",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"太阳光利用：方案设计中考虑了采用太阳能发电替代部分电力设备。例如：太阳能光电池板等",
					2:"太阳能热利用：方案设计中考虑了有效利用太阳能以降低冷热源设备的能耗。例如：太阳能集热板、太阳能真空管热水器",
					3:"废热利用：方案设计中考虑了废热利用以提高冷热源设备的效率。例如：井水水源热泵、河水水源热泵等",
					4:"其他：规划有其他有效的转换利用可再生能源的系统。",
				}
			}
		},
		]
	},
	{
		namezh:"太阳能热水系统",
		backend:{
			type:"text",size:200
		},
		forend:{
			type:"selectmultornull",
			option:{
				1:"选用紧凑式直接加热自然循环的太阳能热水系统",
				2:"利用太阳能供热供暖时，设置其他能源辅助加热设备",
				3:"辅助热源与供暖或炊事系统相结合",
				4:"选用分离式或间接式太阳能热水系统时，管路设计应为最短，并采取保温措施",
			}
		}
	},
	{
		namezh:"有无生物质能源利用",
		backend:{
			type:"boolean",
		},
		forend:{
			type:"boolean",

		}
	},
	{
		namezh:"生物质能源利用（沼气利用）",
		require:{
			name:"NYLYYouWuShengWuZhiNenYuanLiYong",
			namezh:"有无生物质能源利用",
			value:true,
		},
		fields:
		[
		{
			namezh:"能源效率（气化率）",
			backend:{
				type:'text',
			},
			forend:{
				type:"input",
				comment:"%",
			}
		},
		{
			namezh:"灶具热效率",
			backend:{
				type:'text',
			},
			forend:{
				type:"input",
				comment:"%",		
			}
		},
		{
			namezh:"开关阀控孔径",
			backend:{
				type:'text',
			},
			forend:{
				type:"input",
				comment:"数字mm",		
			}
		},
		{
			namezh:"冬季发酵温度",
			backend:{
				type:'text',
			},
			forend:{
				type:"input",
				comment:"数字℃",		
			}
		},
		{
			namezh:"规模化沼气工程采用加热方式维持所需热量进行保温",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"select",
				option:{
					1:"有",
					2:"无",
				}
			}
		},
		{
			namezh:"地源热泵系统",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"inputornull",
				comment:"冬季地埋管换热器进口水温,数字℃",
			}
		},
		]
	}

	]
}
