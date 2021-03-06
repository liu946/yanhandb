module.exports = {
	namezh:"运行管理",
	fields:
	[
	{
		namezh:"管理制度",
		fields:[
		// {
		// 	namezh:"管理体系认证",
		// 	backend:{
		// 		type:"text",size:200
		// 	},
		// 	forend:{
		// 		type:"selectmultornull",
		// 		option:{
		// 			1:"具有ISO 14001环境管理体系认证",
		// 			2:"具有ISO 9001质量管理体系认证",
		// 			3:"具有现行国家标准《能源管理体系要求》GB/T 23331的能源管理体系认证",
		// 		}
		// 	},
		// },
		{
			namezh:"操作规程",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"节能、节水、节材、绿化等相关设施的操作规程在现场明示，操作人员严格遵守规定",
					2:"节能、节水设施运行具有完善的应急预案",
				}
			},
		},
		{
			namezh:"能源资源管理激励机制",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"物业管理机构的工作考核体系中包含能源资源管理激励机制",
					2:"与租用者的合同中包含节能条款",
					3:"采用合同能源管理模式",
				}
			},
		},
		{
			namezh:"绿色教育宣传机制",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"有绿色教育宣传工作记录",
					2:"向使用者提供绿色设施使用手册",
					3:"相关绿色行为与成效获得公共媒体报道"
				}
			},
		},
		{
			namezh:"施工评价",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"input",
				comment:"数字",
			}
		}
		]
	},

	{
		namezh:"技术管理",
		fields:[
		{
			namezh:"公共设施设备检查、调试",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"具有设施设备的检查、调试、运行、标定记录，且记录完整",
					2:"制定并实施设备能效改进等方案",
				}
			},
		},
		// {
		// 	namezh:"空调通风系统检查和清洗",
		// 	backend:{
		// 		type:"text",size:100
		// 	},
		// 	forend:{
		// 		type:"selectmultornull",
		// 		option:{
		// 			1:"制定空调通风设备和风管的检查和清洗计划",
		// 			2:"实施选项1中的检查和清洗计划，且记录保存完整",
		// 		}
		// 	},
		// },
		// {
		// 	namezh:"非传统水源的水质和用水量记录",
		// 	backend:{
		// 		type:"text",size:100
		// 	},
		// 	forend:{
		// 		type:"selectmultornull",
		// 		option:{
		// 			1:"定期进行水质检测，记录完整、准确",
		// 			2:"用水量记录完整、准确",
		// 		}
		// 	},
		// },
		// {
		// 	namezh:"智能化系统的运行效果",
		// 	backend:{
		// 		type:"text",size:200
		// 	},
		// 	forend:{
		// 		type:"selectmultornull",
		// 		option:{
		// 			1:"居住建筑的智能化系统满足现行行业标准《居住区智能化系统配置与技术要求》CJ/T 174的基本配置要求，公共建筑的智能化系统满足现行国家标准《智能建筑设计标准》GB 50314的基础配置要求",
		// 			2:"智能化系统工作正常，符合设计要求",
		// 		}
		// 	},
		// },
		// {
		// 	namezh:"信息化物业管理",
		// 	backend:{
		// 		type:"text",size:100
		// 	},
		// 	forend:{
		// 		type:"selectmultornull",
		// 		option:{
		// 			1:"设置物业信息管理系统",
		// 			2:"物业管理信息系统功能完备",
		// 			3:"记录数据完整",
		// 		}
		// 	},
		// },
		]
	},

	{
		namezh:"环境管理",
		fields:[
		{
			namezh:"无公害病虫害防治技术",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"建立和实施化学药品管理责任制",
					2:"病虫害防治用品使用记录完整",
					3:"采用生物制剂、仿生制剂等无公害防治技术",
				}
			},
		},
		{
			namezh:"栽种和移植的树木一次成活率",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"input",
				comment:"%",
			}
		},
		{
			namezh:"垃圾收集站（点）及垃圾间维护",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"垃圾站(间)定期冲洗",
					2:"垃圾及时清运、处置",
					3:"周边无臭味，用户反映良好",
				}
			},
		},
		{
			namezh:"垃圾分类收集和处理",
			backend:{
				type:"text",size:200
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"垃圾分类收集率达到90％",
					2:"可回收垃圾的回收比例达到90%",
					3:"对可生物降解垃圾进行单独收集和合理处置",
					4:"对有害垃圾进行单独收集和合理处置",
				}
			},
		},
		{
			namezh:"可再生能源系统利用设备维护",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"记录齐全",
					2:"维护维修及时，正常使用",
					3:"利用时间记录齐全、数据完备",
				}
			},
		},
		]
	},

	]
}
