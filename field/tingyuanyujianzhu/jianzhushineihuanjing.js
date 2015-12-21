module.exports = {
	namezh:"建筑室内环境",
	fields:
	[
	{
		namezh:'声环境',
		fields:
		[
		{
			namezh:'噪声',
			backend:{
				type:"text"
			},
			forend:{
				type:"input",
				comment:"dB"

			}
		},
		{
			namezh:'隔声',
			fields:
			[
			{
				namezh:'开口部位',
				backend:{
					type:"text"
				},
				forend:{
					type:"select",
					option:{
						1:'一般可感到交通工具的噪声',
						2:'一般感觉不到交通工具的噪声',
						3:'感觉不到交通工具的噪声',				
					}

				}
			},

			{
				namezh:'隔墙',
				backend:{
					type:"text"
				},
				forend:{
					type:"select",
					option:{
						1:'感觉到有人的谈话声',
						2:'感觉不到有人的谈话声',
						3:'几乎听不到有人的谈话声',	
					}
				}
			},
			{
				namezh:'楼板（轻撞击声源）',
				backend:{
					type:"text"
				},
				forend:{
					type:"select",
					option:{
						1:'椅子的移动声、物体掉落的声明显',
						2:'能感觉到椅子的移动声、物体的掉落声',
						3:'到椅子的移动声、物体的掉落声很小',	
					}	
				}
			},
			{
				namezh:'楼板（强撞击声源）',
				backend:{
					type:"text"
				},
				forend:{
					type:"select",
					option:{
						1:'能明显地感觉到欢闹与走动的声音',
						2:'能听得见欢闹与走动的声音',
						3:'听得见欢闹与走动的声音，但无明显干扰',
					}		
				}
			},

			{
				namezh:'吸声',
				backend:{
					type:"text"
				},
				forend:{
					type:"select",
					option:{
						1:'未使用吸声材料',
						2:'墙壁、楼板、顶棚等其中一处使用了吸声材料',
						3:'墙壁、楼板、顶棚上均使用了吸声材料',	
					}
				}
			},
			]
		},
		]
	},
	{
		namezh:'热环境',
		fields:
		[
		{
			namezh:'采暖',
			fields:
			[
			{
				namezh:"集中供暖",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'是',
						2:"否",
					},
				},
			},
			{
				namezh:"方式",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'selectmult',
					option:{
						1:'火炕',
						2:"火炉",
						3:"土暖气",
						4:"电暖气",
						5:"火墙",
						6:"热水供暖",
						7:"空调",
						8:"其他",
					},
				},	
			},
			]
		},
		{
			namezh:'室温',
			fields:
			[
			{
				namezh:"冬季平均室温",
				backend:{
					type:'text',
				},
				forend:{
					type:"input",
					comment:"℃",
				}
			},
			{
				namezh:"夏季平均室温",
				backend:{
					type:'text',
				},
				forend:{
					type:"input",
					comment:"℃",
				}
			},
			]
		},
		{
			namezh:"外围护结构隔热与保温",
			fields:
			[
			{
				namezh:'夏季降温措施',

				backend:{
					type:"text",size:100
				},
				forend:{
					type:'selectmultornull',
					option:{
						1:'往地面洒水',
						2:"绿化遮阴",
						3:"构筑物遮阴",
						4:"建筑自遮挡",
						5:"内遮阳",
						6:"其他",
					},
				},
			},

			{
				namezh:'冬季防风措施',
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'selectmultornull',
					option:{
						1:'围墙挡风',
						2:"植物挡风",
						3:"构筑物挡风",
						4:"建筑自设挡风构件",
						5:"其他",
					},
				},
			},
			{
				namezh:"有无外墙保温隔热",
				backend:{
					type:"boolean",
				},
				forend:{
					type:"boolean",
				}
			},
			]
		},
		{
			namezh:"外墙保温隔热",
			require:{
				name:"JZSNHJRHJWWHJGGRYBWYouWuWaiQiangBaoWenGeRe",
				namezh:"有无外墙保温隔热",
				value:true,
			},
			fields:
			[
			{
				namezh:"类型",
				backend:{
					type:"text",size:100
				},
				forend:
				{
					type:'selectmultornull',
					option:{
						1:'外墙外保温',
						2:"外墙内保温",
						3:"自保温",
						4:"其他",
					},
				},
			},
			{
				namezh:"材料",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'苯板',
						2:"无机保温砂浆",
						3:"草板",
						4:"加气泡沫混凝土",
						5:"隔热反射涂料",
						6:"其他",
					},
				}
			},
			{
				namezh:"厚度",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'＜20mm',
						2:"20-40mm",
						3:"41-60mm",
						4:"61-80mm",
						5:"81-100mm",
						6:"＞100mm",
					},
				},

			},
			]
		},
		{
			namezh:"有无屋顶保温隔热",
			backend:{
				type:"boolean",
			},
			forend:{
				type:"boolean",
			}
		},
		{
			namezh:"屋顶保温隔热",

			require:{
				name:"JZSNHJRHJYouWuWuDingBaoWenGeRe",
				namezh:"有无屋顶保温隔热",
				value:true,
			},
			fields:
			[

			{
				namezh:"类型",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'屋顶外保温',
						2:"吊顶内保温",
						3:"通风屋面",
						4:"蓄水屋面",
						5:"种植屋面",
						6:"屋顶遮阳",
						7:"其他",
					},
				},
			},
			{
				namezh:"材料",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'炉渣',
						2:"苯板",
						3:"珍珠岩",
						4:"草板",
						5:"农作物秸秆",
						6:"稻壳、木屑",
						7:"其他",
					},
				},
			},
			{
				namezh:"厚度",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'＜20mm',
						2:"20-40mm",
						3:"41-60mm",
						4:"61-80mm",
						5:"81-100mm",
						6:"＞100mm",
					},
				},
			},
			],
		},
		{
			namezh:"外窗冬季保温措施",

			backend:{
				type:"text",size:100
			},
			forend:{
				type:'selectmultornull',
				option:{
					1:'糊窗缝',
					2:"窗外加塑料膜",
					3:"窗内加塑料膜",
					4:"窗内加一层玻璃",
					5:"其他",
				},
			},
		},
		{
			namezh:"外门冬季保温措施",

			backend:{
				type:"text",size:100
			},
			forend:{
				type:'selectmultornull',
				option:{
					1:'挂棉门帘',
					2:"外加门斗",
					3:"附加阳光间",
					4:"门外加塑料膜",
					5:"其他",
				},
			},
		},
		{
			namezh:"有无地面保温隔热",
			backend:{
				type:"boolean",
			},
			forend:{
				type:"boolean",
			}

		},
		{
			namezh:"地面保温隔热",
			require:{
				name:"JZSNHJRHJYouWuDiMianBaoWenGeRe",
				value:true,
			},
			fields:
			[
			{
				namezh:"材料",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'炉渣',
						2:"苯板",
						3:"珍珠岩",
						4:"加气泡沫混凝土",
						5:"陶粒混凝土",
					},
				},
			},
			{
				namezh:"厚度",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'＜20mm',
						2:"20-40mm",
						3:"41-60mm",
						4:"61-80mm",
						5:"81-100mm",
						6:"＞100mm",
					},
				},
			},
			]
		},
		{
			namezh:"设计考虑",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:'select',
				option:{
					1:' 设计中未充分考虑降低经窗户、外墙、屋顶、楼板和外廊进入室内的热量，遮阳和隔热效果差',
					2:" 设计中考虑了降低经窗户、外墙、屋顶、楼板和外廊进入室内的热量，在遮阳和隔热方面不存在问题",
					3:" 充分考虑降低经窗户、外墙、屋顶、楼板和外廊进入室内的热量，具有良好的遮阳和隔热效果",
				},
			},
		},
		{
			namezh:"湿度",
			fields:[
				{
					namezh: "加湿功能",
					backend: {
						type: "text",
					},
					forend: {
						type: 'select',
						option: {
							1: '有',
							2: "无",
						},
					},
				},
				{
					namezh:'室内湿度',
					backend:{
						type:"text",size:100
					},
					forend:{
						type:"input",
						comment:'%',
					},
				},
				]
			},
			]
		},
	{
		namezh:"光环境",
		fields:[
		{
			namezh:"自然光利用",
			fields:[
			{
				namezh:'侧面采光系数',
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'%',
				},
			},
			{
				namezh:'侧面采光照度',
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'lx',
				},
			},


			{
				namezh:'顶部采光系数',
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'%',
				},
			},


			{
				namezh:'顶部采光照度',
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'lx',
				},
			},


			{
				namezh:"采光设备",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'无采光设备',
						2:" 有一种采光设备",
						3:" 有两种以上的采光设备，且具有高性能",
					},
				},
			}
			]
		},
		{
			namezh:"眩光对策",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:'select',
				option:{
					1:'无炫光对策',
					2:"用窗帘进行控制",
					3:" 靠窗檐、窗帘进行控制",
				},
			},
		},
		{
			namezh:"照明控制",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:'select',
				option:{
					1:'无法进行照明控制',
					2:" 粗略的照明控制",
					3:" 精细的照明控制",
				},
			},
		},
		]
	},
	{
		namezh:"室内空气品质",
		fields:[
		{
			namezh:"自然通风性能",
			fields:[

			{
				namezh:"窗户是否可开闭",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'是',
						2:"否",
					},
				},
			},
			{
				namezh:'有效自然通风的开口面积',
				backend:{
					type:"text",size:100
				},
				forend:{
					type:"input",
					comment:'㎡',
				},
			},
			]
		},
		{
			namezh:"运行管理",
			fields:[
			{
				namezh:"CO2的监测",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'无监测',
						2:" 采用手工测量的系统",
						3:" 采用空气品质实时中央检测系统",
					},
				},
			},
			{
				namezh:"吸烟控制",
				backend:{
					type:"text",size:100
				},
				forend:{
					type:'select',
					option:{
						1:'无控制',
						2:"设置吸烟室，采取了防止非吸烟者被动吸烟的最低限度措施",
						3:"全楼禁烟，或设置吸烟室、很好的采取了防止非吸烟者被动吸烟的措施",
					},
				},
			},
			]
		},
		]
	},
	]
}
