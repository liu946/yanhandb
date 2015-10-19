module.exports = {
	namezh:"施工管理",
	fields:
	[
	{
		namezh:"环境保护",
		fields:
		[
		{
			namezh:"采取洒水、覆盖、遮挡等降尘措施",
			backend:{
				type:"text",
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
			namezh:"采取有效的降噪措施。在施工场界测量并记录噪声，满足现行国家标准《建筑施工场界环境噪声排放标准》GB 12523的规定",
			backend:{
				type:"text",
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
			namezh:"可回收施工废弃物的回收率",
			backend:{type:"text",},
			forend:{
				type:"input",
				comment:"数字%",
			}
		},



		{
			namezh:"每10000m2建筑面积的施工固体废弃物排放量SWC",
			backend:{type:"text",},
			forend:{
				type:"input",
				comment:"数字t",
			}
		},




		]
	},
	{
		namezh:"资源节约",
		fields:
		[
		{
			namezh:"施工能耗检测",
			backend:{
				type:"text",
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"制定并实施施工节能和用能方案",
					2:"监测并记录施工区、生活区的能耗",
					3:"监测并记录主要建筑材料、设备从供货商提供的货源地到施工现场运输的能耗",
					4:"监测并记录建筑施工废弃物从施工现场到废弃物处理/回收中心运输的能耗			",
				}
			}
		},



		{
			namezh:"施工用水检测",
			backend:{
				type:"text",
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"制定并实施施工节水和用水方案",
					2:"监测并记录施工区、生活区的水耗数据",
					3:"监测并记录基坑降水的抽取量、排放量和利用量数据、			",
				}
			}
		},



		{
			namezh:"预拌混凝土的损耗降低率",
			backend:{type:"text",},
			forend:{
				type:"input",
				comment:"数字%",
			}
		},



		{
			namezh:"专业化生产的成型钢筋使用率",
			backend:{type:"text",},
			forend:{
				type:"input",
				comment:"数字%",
			}
		},



		{
			namezh:"现场加工钢筋损耗率LRsb",
			backend:{type:"text",},
			forend:{
				type:"input",
				comment:"数字%",
			}
		},



		{
			namezh:"工具式定型模板使用面积占模板工程总面积的比例Rsf",
			backend:{type:"text",},
			forend:{
				type:"input",
				comment:"数字%",
			}
		},
		]
	},

	{
		namezh:"过程管理",
		fields:
		[

		{
			namezh:"参建各方进行绿色建筑重点内容的专项会审",
			backend:{
				type:"text",
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
			namezh:"施工过程中以施工日志记录绿色建筑重点内容的实施情况",
			backend:{
				type:"text",
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
			namezh:"严格控制设计文件变更，避免出现降低建筑绿色性能的重大变更",
			backend:{
				type:"text",
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
			namezh:"建筑的耐久性检测",
			backend:{
				type:"text",
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"对保证建筑结构耐久性的技术措施进行相应检测并记录",
					2:"对有节能、环保要求的设备进行相应检测并记录",
					3:"对有节能、环保要求的装修装饰材料进行相应检测并记录			",
				}
			}
		},



		{
			namezh:"土建装修一体化施工",
			backend:{
				type:"text",
			},
			forend:{
				type:"selectmultornull",
				option:{
					1:"孔洞预留和装修面层固定件的预埋",
					2:"工程竣工时主要功能空间的使用功能完备，装修到位",
					3:"提供装修材料检测报告、机电设备检测报告、性能复试报告",
					4:"提供建筑竣工验收证明、建筑质量保修书、使用说明书",
					5:"提供业主反馈意见书			",
				}
			}
		},



		{
			namezh:"工程竣工验收前，由建设单位组织有关责任单位，进行机电系统的综合调试和联合试运转，结果符合设计要求",
			backend:{
				type:"text",
			},
			forend:{
				type:"select",
				option:{
					1:"有",
					2:"无",
				}
			}
		},

		]
	},
	]
};