module.exports = {
	namezh:"建筑外部特征",
	fields:
	[
	{
		namezh:"屋顶",
		fields:
		[
		{
			namezh:"材料",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"彩钢板（铁皮）",
					2:"水泥瓦",
					3:"砖瓦",
					4:" 青瓦",
					5:"石板瓦",
					6:" 麦秸或稻草",
					7:"陶瓷",
					8:"塑料",
					9:"其他",
				}
			}
		},


		{
			namezh:"形式",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"平屋顶",
					2:"等架双坡顶",
					3:"不等架双坡顶",
					4:"单坡顶",
					5:"其他",
				}
			},
		},

		{
			namezh:'颜色',
			backend:{
				type:"text",
			},
			forend:{
				type:"CCS"
			}
		},


		{
			namezh:"屋脊装饰构件",
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
			namezh:"屋顶绿化",
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
			namezh:"太阳能屋顶",
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

	{
		namezh:"烟囱",
		fields:
		[

		{
			namezh:"位置",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"屋顶",
					2:"屋前",
					3:"屋后",
					4:"屋侧",
				}
			}
		},

		{
			namezh:"高度",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"＜10cm",
					2:"10cm-20cm",
					3:"20cm-30cm",
					4:"＞30cm",
				}
			}
		},


		{
			namezh:"表面材料",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"粘土砖",
					2:"石材",
					3:" 饰面砂浆",
					4:"其他",
				}
			}
		},
		{
			namezh:'颜色',
			backend:{
				type:"text",
			},
			forend:{
				type:"CCS"
			}
		},
		]
	},
	{
		namezh:"墙体",
		fields:
		[
		{
			namezh:"材料",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"粘土砖",
					2:"石材",
					3:"板材",
					4:"砌块",
					5:"草土坯",
					6:"其他",
				}
			}
		},
		{
			namezh:'外墙装饰材料',
			backend:{
				type:"text",
			},
			forend:{
				1:"瓷砖",
				2:"涂料",
				3:"饰面砂浆",
				4:"石材",
				5:"铝板",
				6:"铝塑板",
				7:"水泥板",
				8:"防腐木",
				9:"其他",
				10:"无",
			}
		},
		{
			namezh:'主体色',
			backend:{
				type:"text",
			},
			forend:{
				type:"CCS"
			}
		},
		{
			namezh:'辅助色',
			backend:{
				type:"text",
			},
			forend:{
				type:"CCS"
			}
		},
		{
			namezh:'构件',
			backend:{
				type:"text",
			},
			forend:{
				1:"装饰图案",
				2:"贴面雕塑",
				3:"其他",
				4:"无装饰	",
			}
		},
		{
			namezh:"装饰内容",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"人物",
					2:"民族符号",
					3:"几何图形",
					4:"地方标志",
					5:"动植物",
					6:"其他",
				}
			}
		},
		]
	},
	{
		namezh:"有无台基",
		backend:{
			type:"boolean",
		},
		forend:{
			type:"boolean",
		}
	},
	{
		namezh:"台基",
		require:{
			name:"",
			namezh:"有无台基",
			value:1,
		},
		fields:
		[


		{
			namezh:"表面材料",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"瓷砖",
					2:"涂料",
					3:"饰面砂浆",
					4:"石材",
					5:"铝板",
					6:"铝塑板",
					7:"水泥板",
					8:"防腐木",
					9:"其他",
				}
			}
		},
		{
			namezh:'颜色',
			backend:{
				type:"text",
			},
			forend:{
				type:"CCS"
			}
		},
		]

	},


	{
		namezh:"台阶",
		backend:{
			type:"text",		
		},
		forend:{
			type:"selectmultornull",
			option:{
				1:"粘土砖",
				2:"饰面砂浆",
				3:"石材",
				4:"涂料",
				5:"其他",
			},
			comment:"表面材料",
		}
	},

	{
		namezh:"有无门",
		backend:{
			type:"boolean",
		},
		forend:{
			type:"boolean",
		}
	},
	{
		namezh:"门",
		require:{
			name:"",
			namezh:"有无门",
			value:1,
		},
		fields:
		[
		{
			namezh:"材料",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"木材",
					2:"铝合金",
					3:"塑钢",
					4:"金属",
					5:"其他",
				}
			}
		},


		{
			namezh:'颜色',
			backend:{
				type:"text",
			},
			forend:{
				type:"CCS"
			}
		},	
		]

	},

	{
		namezh:"窗",
		fields:
		[

		{
			namezh:"窗朝向",
			backend:{
				type:"text",		
			},
			forend:{
				type:"selectmult",
				option:{
					1:"南向",
					2:"北向",
					3:"东西向",
				}
			}
		},

		{
			namezh:"南向",
			require:{
				namezh:"窗朝向",
				name:"",
				value:""
			},
			fields:
			[

			{
				namezh:"材料",
				backend:{
					type:"text",		
				},
				forend:{
					type:"select",
					option:{
						1:"木材",
						2:"铝合金",
						3:"塑钢",
						4:"其他",
					}
				}
			},
			{
				namezh:'颜色',
				backend:{
					type:"text",
				},
				forend:{
					type:"CCS"
				}
			},
			{
				namezh:"窗墙比",
				backend:{
					type:"text",		
				},
				forend:{
					type:"select",
					option:{
						1:"＜20%",
						2:" 20%-40%",
						3:" 40%-60%",
						4:"＞60%",
					}
				}
			},

			{
				namezh:"有无玻璃幕墙",
				backend:{
					type:"boolean",
				},
				forend:{
					type:"boolean",
				}
			},
			{
				namezh:"可开启部分比例",
				require:{
					name:"",
					namezh:"有无玻璃幕墙",
					value:1,
				},
				backend:{
					type:'text',
				},
				forend:{
					1:"＜5%",
					2:"5-10%",
					3:"＞10% ",
				}
			},
			]
		},
		{
			namezh:"北向",
			require:{
				namezh:"窗朝向",
				name:"",
				value:""
			},
			fields:
			[


			{
				namezh:"材料",
				backend:{
					type:"text",		
				},
				forend:{
					type:"select",
					option:{
						1:"木材",
						2:"铝合金",
						3:"塑钢",
						4:"其他",
					}
				}
			},
			{
				namezh:'颜色',
				backend:{
					type:"text",
				},
				forend:{
					type:"CCS"
				}
			},
			{
				namezh:"窗墙比",
				backend:{
					type:"text",		
				},
				forend:{
					type:"select",
					option:{
						1:"＜20%",
						2:" 20%-40%",
						3:" 40%-60%",
						4:"＞60%",
					}
				}
			},

			{
				namezh:"有无玻璃幕墙",
				backend:{
					type:"boolean",
				},
				forend:{
					type:"boolean",
				}
			},
			{
				namezh:"可开启部分比例",
				require:{
					name:"",
					namezh:"有无玻璃幕墙",
					value:1,
				},
				backend:{
					type:'text',
				},
				forend:{
					1:"＜5%",
					2:"5-10%",
					3:"＞10% ",
				}
			},
			]
		},
		{
			namezh:"东西向",
			require:{
				namezh:"窗朝向",
				name:"",
				value:""
			},
			fields:
			[


			{
				namezh:"材料",
				backend:{
					type:"text",		
				},
				forend:{
					type:"select",
					option:{
						1:"木材",
						2:"铝合金",
						3:"塑钢",
						4:"其他",
					}
				}
			},
			{
				namezh:'颜色',
				backend:{
					type:"text",
				},
				forend:{
					type:"CCS"
				}
			},
			{
				namezh:"窗墙比",
				backend:{
					type:"text",		
				},
				forend:{
					type:"select",
					option:{
						1:"＜20%",
						2:" 20%-40%",
						3:" 40%-60%",
						4:"＞60%",
					}
				}
			},

			{
				namezh:"有无玻璃幕墙",
				backend:{
					type:"boolean",
				},
				forend:{
					type:"boolean",
				}
			},
			{
				namezh:"可开启部分比例",
				require:{
					name:"",
					namezh:"有无玻璃幕墙",
					value:1,
				},
				backend:{
					type:'text',
				},
				forend:{
					1:"＜5%",
					2:"5-10%",
					3:"＞10% ",
				}
			},
			]
		},

		]
	},

	{
		namezh:"有无牌匾",
		backend:{
			type:"boolean",
		},
		forend:{
			type:"boolean",
		}
	},
	{
		namezh:"牌匾",
		require:{
			name:"",
			namezh:"有无牌匾",
			value:1,
		},
		fields:
		[
		{
			namezh:"位置",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"屋顶",
					2:" 贴附于建筑物外墙面",
					3:" 垂直于建筑物外墙",
					4:" 利用建筑物外窗设置",
					5:"其他",
				}
			}
		},
		{
			namezh:'颜色',
			backend:{
				type:"text",
			},
			forend:{
				type:"CCS"
			}
		},
		{
			namezh:"材质",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"木材",
					2:"塑料",
					3:"彩钢板",
					4:"LED",
					5:"PVC板",
					6:"喷绘布",
					7:"其他",
				}
			}
		},
		{
			namezh:"立面比例关系",
			backend:{
				type:"text",		
			},
			forend:{
				type:"select",
				option:{
					1:"＜10%",
					2:" 10%-20%",
					3:"20%-30%",
					4:"30%-40%",
					5:"＞40%",
				}
			}
		},
		]
	},
	{
		namezh:"无障碍设计",
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
	}
	]
};