// cunzhen:'js',
// table defination

var sys = require('../func/sys.js')
module.exports = sys.extend(require('../base/tablefieldgroup.js'),
    {
        name: "cunzhen",
        fields: 	//	[{name:分类名,fields:[与基类field相同]},分类obj,:':':']',
            [
                {
                    namezh: '村镇基本信息',
                    fields: [
                        {
                            namezh: '所属镇域',
                            backend: {
                                type: 'text',
                                size: 50,
                                defaultValue: 'null',
                            },
                            forend: {
                                type: 'input',
                                defaultValue: 'null',
                            },
                        },
                        {
                            namezh: '村镇名称',
                            backend: {
                                type: 'text',
                                size: 50,
                                defaultValue: 'null',
                            },
                            forend: {
                                type: 'input',
                                defaultValue: 'null',
                            },
                        },
                        {
                            namezh: '人均居住用地',
                            backend: {
                                type: 'number',

                            },
                            forend: {
                                type: 'input',
                                defaultValue: '0',
                                size: ".1",
                                comment: "m^2",
                            },
                        },
                        {
                            namezh: '建筑布局模式',
                            backend: {
                                type: 'text',
                                size: 100,
                            },
                            forend: {
                                type: 'selectmult',
                                defaultValue: 'null',
                                option: {
                                    1: '布局规整、顺应地势',
                                    2: '结合场地自然条件，对建筑的体形、朝向和楼距等进行优化设计',
                                }
                            },
                        },
                    ]
                },
                {
                    namezh: '自然环境',
                    fields: [
                        {
                            namezh: '水体面积',
                            backend: {
                                type: 'number',
                            },
                            forend: {
                                type: 'input',
                                defaultValue: '0',
                                size: ".1",
                                comment: "m^2",
                            },
                        },
                        {
                            namezh: '灾害',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'selectmultornull',
                                defaultValue: 'null',
                                option: {
                                    1: '地震',
                                    2: '洪涝',
                                    3: '干旱',
                                    4: '风灾',
                                    5: '雪灾',
                                    6: '雹灾',
                                    7: '滑坡',
                                    8: '泥石流',
                                    9: '虫灾',
                                    10: '其他',
                                },
                            },
                        },
                        {
                            namezh: '环境污染与安全',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'selectmultornull',
                                defaultValue: 'null',
                                option: {
                                    1: '未达标的厨房油烟',
                                    2: '工业废气',
                                    3: '污水',
                                    4: '危险化学品',

                                    5: '易燃易爆品',
                                    6: '电磁辐射',
                                    7: '垃圾堆',
                                    8: '噪音',

                                    9: '养殖户（企业）',
                                    10: '含氡土壤',
                                    11: '其他',
                                },
                            },
                        },
                        {
                            namezh: '滨水绿带宽度',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'select',
                                defaultValue: 'null',
                                option: {
                                    1: '＜10m',
                                    2: '10m-20m',
                                    3: '20m-30m',
                                    4: '＞30m',
                                },
                            },
                        },
                        {
                            namezh: '水质情况',
                            fields: [
                                {
                                    namezh: '水质',
                                    backend: {
                                        type: 'text',
                                        size: 20,
                                    },
                                    forend: {
                                        type: 'select',
                                        defaultValue: 'null',
                                        option: {
                                            1: 'Ⅰ类',
                                            2: 'Ⅱ类',
                                            3: 'Ⅲ类',
                                            4: 'Ⅳ类',
                                            5: 'Ⅴ类',
                                            6: '劣Ⅴ类',
                                        },
                                    },
                                },
                                {
                                    namezh: '水体污染',
                                    backend: {
                                        type: 'text',
                                        size: 20,
                                    },
                                    forend: {
                                        type: 'selectmultornull',
                                        defaultValue: 'null',
                                        option: {
                                            1: '工业废物',
                                            2: '生活垃圾',
                                            3: '其他',
                                        },
                                    },
                                },
                            ]

                        },
                    ]
                },
                {
                    namezh: '人文环境',
                    fields: [
                        {
                            namezh: '民族语言',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'select',
                                defaultValue: 'null',
                                option: {
                                    1: '有',
                                    2: '无',
                                }
                            },
                        },
                        {
                            namezh: '民族服饰',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'select',
                                defaultValue: 'null',
                                option: {
                                    1: '有',
                                    2: '无',
                                }
                            },
                        },
                        {
                            namezh: '节庆与习俗',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'select',
                                defaultValue: 'null',
                                option: {
                                    1: '有',
                                    2: '无',
                                }
                            },
                        },
                        {
                            namezh: '神话传说与奇人异事',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'select',
                                defaultValue: 'null',
                                option: {
                                    1: '有',
                                    2: '无',
                                }
                            },
                        },
                        {
                            namezh: '社区内活动组织频率',
                            backend: {
                                type: 'text',
                                size: 20,
                            },
                            forend: {
                                type: 'select',
                                defaultValue: 'null',
                                option: {
                                    1: '＜2次/月',
                                    2: '2-5次/月',
                                    3: '5-8次/月',

                                    4: '8-10次/月',
                                    5: '＞10次/月',
                                }
                            }
                        },
                    ]
                },
            ]
    })

