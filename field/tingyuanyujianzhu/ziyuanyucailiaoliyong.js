module.exports={
	namezh:"资源与材料利用",
	fields:
	[

	{
		namezh:"水资源保护",
		fields:[
		{
			namezh:"节水",
			backend:{
				type:"text"
			},
			forend:{
				type:"select",
				option:{
					1:"无节水计划",
					2:"在主要阀门处安装节水装置",
					3:"除安装节水装置外，还采用了节水型设备（如声控冲水系统、节水厕所等）",
				}
			}
		},
		{
			namezh:"雨水利用",
			fields:[

			{
				namezh:"雨水利用系统",
				backend:{
					type:"text",
					size:100
				},
				forend:{
					type:"select",
					option:{
						1:"无雨水利用措施",
						2:"有雨水利用措施，雨水利用率在20%以上",
					}
				}
			},

			{
				namezh:"杂排水再利用系统",
				backend:{
					type:"text",
					size:100
				},
				forend:{
					type:"select",
					option:{
						1:"无杂排水再利用措施",
						2:"有杂排水再利用措施",
						3:"有杂排水利用及污水再利用设备和措施",
					}
				}
			},
			]
		},
		{
			namezh:"灌溉",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"采用节水灌溉系统",
					2:"设置土壤湿度感应器、雨天关闭装置等节水控制措施",
					3:"灌溉用水采用河水、收集雨水",
					4:"灌溉采用微喷灌、滴灌、渗灌等高效节水灌溉方式",
					5:"种植无需永久灌溉植物",
				}
			},
		},	
		]
	},



	{
		namezh:"使用低环境负荷材料",
		fields:[

		{
			namezh:"资源的再利用率",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"input",
				comment:"%",
			}
		},

		// {
		// 	namezh:"可持续森林采伐的木材（绿色木材）使用率",
		// 	backend:{
		// 		type:"text",size:100
		// 	},
		// 	forend:{
		// 		type:"input",
		// 		comment:"%",
		// 	}
		// },


		{
			namezh:"对健康无害的材料使用",
			backend:{
				type:"text",
				size:30
			},
			forend:{
				type:"select",
				option:{
					1:"1种",
					2:"2种",
					3:"3种",
					4:"4种及以上",
					5:"无",
				}
			}
		},


		{
			namezh:"对既有建筑主体的再利用",
			backend:{
				type:"text",
				size:40
			},
			forend:{
				type:"select",
				option:{
					1:"不进行再利用",
					2:"对部分建筑框架进行再利用",
					3:"对全部建筑框架进行再利用",
				}
			}
		},


		{
			namezh:"旧材料再利用量",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"input",
				comment:"%",
			}
		},
		]
	},
	]
}
;
