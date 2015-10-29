module.exports = {
	namezh:"历史建筑",
	require:{
		namezh:"是否是历史建筑",
		name:"JZJBXXShiFuShiLiShiJianZhu",
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
		namezh:"高度",
		backend:{
			type:"text",size:100
		},
		forend:{
			type:"select",
			option:{
				1:"＜5m",
				2:"5-10m",
				3:"10-20m",
				4:"20-30m",
				5:"＞30m",
			}
		}
	},
	{
		namezh:"层数",
		backend:{
			type:"text",size:100
		},
		forend:{
			type:"select",
			option:{
				1:"1",
				2:"2",
				3:"3",
				4:"4",
				5:"4层以上",
			}
		}
	},
	{
		namezh:"周边建筑高度是否比该建筑高",
		fields:
		[
		{
			namezh:"东侧建筑",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"select",
				option:{
					1:"是",
					2:"不是",
				}
			}	
		},
		{
			namezh:"西侧建筑",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"select",
				option:{
					1:"是",
					2:"不是",
				}
			}	
		},
		{
			namezh:"南侧建筑",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"select",
				option:{
					1:"是",
					2:"不是",
				}
			}	
		},
		{
			namezh:"北侧建筑",
			backend:{
				type:"text",size:100
			},
			forend:{
				type:"select",
				option:{
					1:"是",
					2:"不是",
				}
			}	
		},
		]
	},
	{
		namezh:"颜色",
		backend:{
			type:"text",size:100
		},
		forend:{
			type:"CCS",
		}
	},
	{
		namezh:"建筑风格",
		backend:{
			type:"text",size:100
		},
		forend:{
			type:"select",
			option:{
				1:"中式",
				2:"欧式",
				3:"其他",
			}
		}
	},
	{
		namezh:"传统格局和历史风貌遗存度",
		backend:{
			type:"text",size:100
		},
		forend:{
			type:"select",
			option:{
				1:"＜20%",
				2:"20%-40%",
				3:"40%-60%",
				4:"60%-80%",
				5:"＞80%",
			}
		}
	}
	]
}