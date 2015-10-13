// tablebase.js


var table = {
	name:'',
	fields:
	[{
        "classname": "村镇基本信息",
        "childfield": [
            {
                "fieldname": "村镇名称",
                "datatype": "inputtext",
                "datasize": 50,
                "default": "",
                "field": "CunZhenJiBenXinXiCunZhenMingChen"
            },
            {
                "field": "CunZhenJiBenXinXiRenJunJiZhuYongDi",
                "fieldname": "人均居住用地",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "建筑布局模式",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": " 布局规整顺应地势",
                    "2": " 结合场地自然条件，对建筑的体形朝向和楼距等进行优化设计"
                },
                "field": "CunZhenJiBenXinXiJianZhuBuJuMoShi"
            }
        ],
        "class": "CunZhenJiBenXinXi"
    },
		
	]
}

module.exports = table;