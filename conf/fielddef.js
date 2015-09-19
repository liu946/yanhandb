// 字段定义文件
/* 
时间 2015-09-18
格式 js class
author Michael Liu HIT
*/
data = [
    {
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
    {
        "classname": "自然环境",
        "childfield": [
            {
                "field": "ZiRanHuanJingShuiTiMianJi",
                "fieldname": "水体面积",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "灾害",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "地震",
                    "2": "洪涝",
                    "3": "干旱",
                    "4": "风灾",
                    "5": "雪灾",
                    "6": "雹灾",
                    "7": "滑坡",
                    "8": "泥石流",
                    "9": "虫灾",
                    "10": "其他"
                },
                "field": "ZiRanHuanJingZaiHai"
            },
            {
                "fieldname": "环境污染与安全",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "未达标的厨房油烟",
                    "2": "工业废气",
                    "3": "污水",
                    "4": "危险化学品",
                    "5": "易燃易爆品",
                    "6": "电磁辐射",
                    "7": "垃圾堆",
                    "8": "噪音",
                    "9": "养殖户（企业）",
                    "10": " 含氡土壤",
                    "11": "其他______"
                },
                "field": "ZiRanHuanJingHuanJingWuRanYuAnQuan"
            },
            {
                "fieldname": "滨水绿带宽度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜10m",
                    "2": "10m-20m",
                    "3": "20m-30m",
                    "4": "＞30m"
                },
                "field": "ZiRanHuanJingBinShuiLvDaiKuanDu"
            },
            {
                "fieldname": "水质",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "Ⅰ类",
                    "2": "Ⅱ类",
                    "3": "Ⅲ类",
                    "4": "Ⅳ类",
                    "5": "Ⅴ类",
                    "6": "劣Ⅴ类"
                },
                "field": "ZiRanHuanJingShuiZhi"
            },
            {
                "fieldname": "水体污染",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "工业废物",
                    "2": "生活垃圾",
                    "3": "其他______"
                },
                "field": "ZiRanHuanJingShuiTiWuRan"
            }
        ],
        "class": "ZiRanHuanJing"
    },
    {
        "classname": "人文环境",
        "childfield": [
            {
                "fieldname": "民族语言",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "有______",
                    "2": "无"
                },
                "field": "RenWenHuanJingMinZuYuYan"
            },
            {
                "fieldname": "民族服饰",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "有______",
                    "2": "无"
                },
                "field": "RenWenHuanJingMinZuFuShi"
            },
            {
                "fieldname": "节庆与习俗",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "有______",
                    "2": "无"
                },
                "field": "RenWenHuanJingJieQingYuXiSu"
            },
            {
                "fieldname": "神话传说与奇人异事",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "有______",
                    "2": "无"
                },
                "field": "RenWenHuanJingShenHuaChuanShuoYuQiRenYiShi"
            },
            {
                "fieldname": "社区内活动组织频率",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜2次/月",
                    "2": "2-5次/月",
                    "3": "5-8次",
                    "4": "8-10次/月",
                    "5": "＞10次/月"
                },
                "field": "RenWenHuanJingSheQuNaHuoDongZuZhiPinLv"
            }
        ],
        "class": "RenWenHuanJing"
    },
    {
        "classname": "建筑外部环境",
        "childfield": [
            {
                "fieldname": "编号",
                "datatype": "int",
                "default": 0,
                "field": "JianZhuWaiBuHuanJingBianHao"
            },
            {
                "fieldname": "D/H",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜1",
                    "2": "1-2",
                    "3": "2-3",
                    "4": " 3-6",
                    "5": "大于6"
                },
                "field": "JianZhuWaiBuHuanJingDH"
            },
            {
                "fieldname": "铺地材质",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "裸土",
                    "2": "水泥",
                    "3": "沥青",
                    "4": "石子",
                    "5": "红砖",
                    "6": "铺地砖",
                    "7": "其他______"
                },
                "field": "JianZhuWaiBuHuanJingPuDiCaiZhi"
            },
            {
                "fieldname": "垃圾箱数量",
                "datatype": "int",
                "default": 0,
                "field": "JianZhuWaiBuHuanJingLaJiXiangShuLiang"
            },
            {
                "fieldname": "垃圾箱颜色",
                "datatype": "CCS",
                "default": "",
                "field": "JianZhuWaiBuHuanJingLaJiXiangYanSe"
            },
            {
                "fieldname": "垃圾箱服务半径",
                "datatype": "int",
                "default": 0,
                "field": "JianZhuWaiBuHuanJingLaJiXiangFuWuBanJing"
            },
            {
                "fieldname": "座椅数量",
                "datatype": "int",
                "default": 0,
                "field": "JianZhuWaiBuHuanJingZuoYiShuLiang"
            },
            {
                "fieldname": "座椅颜色",
                "datatype": "CCS",
                "default": "",
                "field": "JianZhuWaiBuHuanJingZuoYiYanSe"
            },
            {
                "fieldname": "座椅服务半径",
                "datatype": "int",
                "default": 0,
                "field": "JianZhuWaiBuHuanJingZuoYiFuWuBanJing"
            },
            {
                "fieldname": "树池数量",
                "datatype": "int",
                "default": 0,
                "field": "JianZhuWaiBuHuanJingShuChiShuLiang"
            },
            {
                "fieldname": "树池颜色",
                "datatype": "CCS",
                "default": "",
                "field": "JianZhuWaiBuHuanJingShuChiYanSe"
            }
        ],
        "class": "JianZhuWaiBuHuanJing"
    },
    {
        "classname": "街道空间",
        "childfield": [
            {
                "fieldname": "绿化率",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "百分比",
                "field": "JieDaoKongJianLvHuaLv"
            },
            {
                "fieldname": "照明覆盖率",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "百分比",
                "field": "JieDaoKongJianZhaoMingFuGaiLv"
            },
            {
                "fieldname": "垃圾清运频率",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜1次,/周 ",
                    "2": "1,~2次/周",
                    "3": "3~5次/周",
                    "4": "5次以上"
                },
                "field": "JieDaoKongJianLaJiQingYunPinLv"
            }
        ],
        "class": "JieDaoKongJian"
    },
    {
        "classname": "开敞空间",
        "childfield": [
            {
                "fieldname": "功能",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "文体活动",
                    "2": "休憩交往",
                    "3": "展示",
                    "4": "晒场",
                    "5": "其他"
                },
                "field": "KaiChangKongJianGongNen"
            },
            {
                "fieldname": "设施",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "雕塑",
                    "2": "座椅",
                    "3": "健身器械",
                    "4": "其他"
                },
                "field": "KaiChangKongJianSheShi"
            },
            {
                "field": "KaiChangKongJianLvHuaMianJi",
                "fieldname": "绿化面积",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "活动组织频率",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜2次/周",
                    "2": "2-5次/周 ",
                    "3": "＞5次"
                },
                "field": "KaiChangKongJianHuoDongZuZhiPinLv"
            }
        ],
        "class": "KaiChangKongJian"
    },
    {
        "classname": "建筑基本信息",
        "childfield": [
            {
                "fieldname": "编号",
                "datatype": "int",
                "default": 0,
                "field": "JianZhuJiBenXinXiBianHao"
            },
            {
                "fieldname": "名称",
                "datatype": "inputtext",
                "datasize": 50,
                "default": "",
                "field": "JianZhuJiBenXinXiMingChen"
            },
            {
                "fieldname": "建筑性质",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "居住建筑",
                    "2": "公共建筑"
                },
                "field": "JianZhuJiBenXinXiJianZhuXingZhi"
            },
            {
                "fieldname": "是否为历史建筑",
                "datatype": "bool",
                "default": "否",
                "items": {
                    "1": "是",
                    "2": "否"
                },
                "field": "JianZhuJiBenXinXiShiFuWeiLiShiJianZhu"
            },
            {
                "fieldname": "是否为具有标志性",
                "datatype": "bool",
                "default": "否",
                "items": {
                    "1": "是",
                    "2": "否"
                },
                "field": "JianZhuJiBenXinXiShiFuWeiJuYouBiaoZhiXing"
            },
            {
                "fieldname": "总建筑面积",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "",
                "field": "JianZhuJiBenXinXiZongJianZhuMianJi"
            },
            {
                "fieldname": "建筑基底面积",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "",
                "field": "JianZhuJiBenXinXiJianZhuJiDiMianJi"
            },
            {
                "fieldname": "地下空间面积",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "",
                "field": "JianZhuJiBenXinXiDiXiaKongJianMianJi"
            },
            {
                "fieldname": "朝向",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "南向",
                    "2": "北向",
                    "3": "东向",
                    "4": "西向",
                    "5": "西南",
                    "6": "东北",
                    "7": "东南",
                    "8": "西北"
                },
                "field": "JianZhuJiBenXinXiChaoXiang"
            },
            {
                "fieldname": "结构形式",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "木结构",
                    "2": "砖混结构",
                    "3": "石木结构",
                    "4": "土木结构",
                    "5": "混凝土框架结构",
                    "6": "钢构架复合墙板"
                },
                "field": "JianZhuJiBenXinXiJieGouXingShi"
            },
            {
                "fieldname": "层数",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "1",
                    "2": "2",
                    "3": "3",
                    "4": "4",
                    "5": "5",
                    "6": "6",
                    "7": "6层以上"
                },
                "field": "JianZhuJiBenXinXiCengShu"
            },
            {
                "fieldname": "高度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜5m",
                    "2": "5-10m",
                    "3": "10-20m",
                    "4": "20-30m",
                    "5": "＞30m"
                },
                "field": "JianZhuJiBenXinXiGaoDu"
            },
            {
                "fieldname": "建筑风格",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "现代",
                    "2": "欧式",
                    "3": "中式",
                    "4": "其他"
                },
                "field": "JianZhuJiBenXinXiJianZhuFengGe"
            },
            {
                "fieldname": "建造年代",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "2010年后",
                    "2": "2000-2010年",
                    "3": "1990-2000",
                    "4": "1980-1990年",
                    "5": "1970-1980年",
                    "6": "1970年前"
                },
                "field": "JianZhuJiBenXinXiJianZaoNianDai"
            }
        ],
        "class": "JianZhuJiBenXinXi"
    },
    {
        "classname": "庭院院落",
        "childfield": [
            {
                "fieldname": "布局模式",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "前院",
                    "2": "后院",
                    "3": "前后院",
                    "4": "内院",
                    "5": "侧院"
                },
                "field": "TingYuanYuanLuoBuJuMoShi"
            },
            {
                "fieldname": "地面铺装",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "土",
                    "2": "水泥",
                    "3": " 粘土砖",
                    "4": "铺地砖",
                    "5": "其他______"
                },
                "field": "TingYuanYuanLuoDiMianPuZhuang"
            },
            {
                "fieldname": "庭院面积",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "",
                "field": "TingYuanYuanLuoTingYuanMianJi"
            },
            {
                "fieldname": "院落生产功能",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "家禽养殖",
                    "2": "家畜养殖",
                    "3": "菜园",
                    "4": "仓房",
                    "5": "车库",
                    "6": "农机库"
                },
                "field": "TingYuanYuanLuoYuanLuoShengChanGongNen"
            },
            {
                "fieldname": "院落生活功能",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "做饭",
                    "2": "洗漱",
                    "3": "晾晒",
                    "4": "厕所",
                    "5": "沼气池"
                },
                "field": "TingYuanYuanLuoYuanLuoShengHuoGongNen"
            },
            {
                "fieldname": "院落娱乐功能",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "棋牌桌",
                    "2": "座椅",
                    "3": "凉棚"
                },
                "field": "TingYuanYuanLuoYuanLuoYuLeGongNen"
            },
            {
                "fieldname": "护栏与围墙高度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "0.5-1米",
                    "2": "1-1.5米",
                    "3": "1.5-2米 ",
                    "4": "＞2米"
                },
                "field": "TingYuanYuanLuoHuLanYuWeiQiangGaoDu"
            },
            {
                "fieldname": "护栏与围墙材质",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "竹木",
                    "2": "砖石",
                    "3": "铁艺",
                    "4": "其他______"
                },
                "field": "TingYuanYuanLuoHuLanYuWeiQiangCaiZhi"
            },
            {
                "field": "TingYuanYuanLuoLvHuaMianJi",
                "fieldname": "绿化面积",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "绿化方式",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "生态绿地",
                    "2": "墙体绿化",
                    "3": "屋顶绿化"
                },
                "field": "TingYuanYuanLuoLvHuaFangShi"
            },
            {
                "fieldname": "植被种类",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "乔木",
                    "2": "灌木",
                    "3": "花卉/草丛"
                },
                "field": "TingYuanYuanLuoZhiBeiZhongLei"
            }
        ],
        "class": "TingYuanYuanLuo"
    },
    {
        "classname": "屋顶",
        "childfield": [
            {
                "fieldname": "材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "彩钢板（铁皮）",
                    "2": "水泥瓦",
                    "3": "砖瓦",
                    "4": " 青瓦",
                    "5": "石板瓦",
                    "6": " 麦秸或稻草",
                    "7": "陶瓷",
                    "8": "塑料",
                    "9": "其他______"
                },
                "field": "WuDingCaiLiao"
            },
            {
                "fieldname": "形式",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "平屋顶",
                    "2": "等架双坡顶",
                    "3": "不等架双坡顶",
                    "4": "单坡顶",
                    "5": "其他______"
                },
                "field": "WuDingXingShi"
            },
            {
                "fieldname": "颜色",
                "datatype": "CCS",
                "default": "",
                "field": "WuDingYanSe"
            },
            {
                "fieldname": "屋脊装饰构件",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "WuDingWuJiZhuangShiGouJian"
            },
            {
                "fieldname": "屋顶绿化",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "WuDingWuDingLvHua"
            },
            {
                "fieldname": "太阳能屋顶",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "WuDingTaiYangNenWuDing"
            }
        ],
        "class": "WuDing"
    },
    {
        "classname": "烟囱",
        "childfield": [
            {
                "fieldname": "位置",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "屋顶",
                    "2": "屋前",
                    "3": "屋后",
                    "4": "屋侧"
                },
                "field": "YanCongWeiZhi"
            },
            {
                "fieldname": "高度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜10cm",
                    "2": "10cm-20cm",
                    "3": "20cm-30cm",
                    "4": "＞30cm"
                },
                "field": "YanCongGaoDu"
            },
            {
                "fieldname": "表面材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "粘土砖",
                    "2": "石材",
                    "3": " 饰面砂浆",
                    "4": "其他______"
                },
                "field": "YanCongBiaoMianCaiLiao"
            },
            {
                "fieldname": "颜色",
                "datatype": "CCS",
                "default": "",
                "field": "YanCongYanSe"
            }
        ],
        "class": "YanCong"
    },
    {
        "classname": "墙体",
        "childfield": [
            {
                "fieldname": "材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "粘土砖",
                    "2": "石材",
                    "3": "板材",
                    "4": "砌块",
                    "5": "草土坯",
                    "6": "其他______"
                },
                "field": "QiangTiCaiLiao"
            },
            {
                "fieldname": "外墙装饰材料",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "瓷砖",
                    "2": "涂料",
                    "3": "饰面砂浆",
                    "4": "石材",
                    "5": "铝板",
                    "6": "铝塑板",
                    "7": "水泥板",
                    "8": "防腐木",
                    "9": "其他______"
                },
                "field": "QiangTiWaiQiangZhuangShiCaiLiao"
            },
            {
                "fieldname": "主体色",
                "datatype": "CCS",
                "default": "",
                "field": "QiangTiZhuTiSe"
            },
            {
                "fieldname": "辅助色",
                "datatype": "CCS",
                "default": "",
                "field": "QiangTiFuZhuSe"
            },
            {
                "fieldname": "构件",
                "datatype": "mutiselecttext",
                "default": "",
                "items": {
                    "1": "装饰图案",
                    "2": "贴面雕塑",
                    "3": "其他______"
                },
                "field": "QiangTiGouJian"
            },
            {
                "fieldname": "装饰内容",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "人物",
                    "2": "民族符号",
                    "3": "几何图形",
                    "4": "地方标志",
                    "5": "动植物",
                    "6": "其他______"
                },
                "field": "QiangTiZhuangShiNaRong"
            }
        ],
        "class": "QiangTi"
    },
    {
        "classname": "台基",
        "childfield": [
            {
                "fieldname": "有无",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "TaiJiYouWu"
            },
            {
                "fieldname": "表面材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "瓷砖",
                    "2": "涂料",
                    "3": "饰面砂浆",
                    "4": "石材",
                    "5": "铝板",
                    "6": "铝塑板",
                    "7": "水泥板",
                    "8": "防腐木",
                    "9": "其他______"
                },
                "field": "TaiJiBiaoMianCaiLiao"
            },
            {
                "fieldname": "颜色",
                "datatype": "CCS",
                "default": "",
                "field": "TaiJiYanSe"
            }
        ],
        "class": "TaiJi"
    },
    {
        "classname": "台阶",
        "childfield": [
            {
                "fieldname": "有无",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "TaiJieYouWu"
            },
            {
                "fieldname": "表面材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "粘土砖",
                    "2": "饰面砂浆",
                    "3": "石材",
                    "4": "涂料",
                    "5": "其他______"
                },
                "field": "TaiJieBiaoMianCaiLiao"
            }
        ],
        "class": "TaiJie"
    },
    {
        "classname": "门",
        "childfield": [
            {
                "fieldname": "材料",
                "datatype": "selecttext",
                "datasize": 0,
                "default": "",
                "items": {
                    "1": "木材",
                    "2": "铝合金",
                    "3": "塑钢",
                    "4": "金属",
                    "5": "其他______"
                },
                "field": "MenCaiLiao"
            },
            {
                "fieldname": "颜色",
                "datatype": "CCS",
                "default": "",
                "field": "MenYanSe"
            }
        ],
        "class": "Men"
    },
    {
        "classname": "窗",
        "childfield": [
            {
                "fieldname": "南向_材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "木材",
                    "2": "铝合金",
                    "3": "塑钢",
                    "4": "其他______"
                },
                "field": "ChuangNanXiangCaiLiao"
            },
            {
                "fieldname": "南向_颜色",
                "datatype": "CCS",
                "default": "",
                "field": "ChuangNanXiangYanSe"
            },
            {
                "fieldname": "南向_窗墙比",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜20%",
                    "2": " 20%-40% ",
                    "3": " 40%-60%",
                    "4": "＞60%"
                },
                "field": "ChuangNanXiangChuangQiangBi"
            },
            {
                "fieldname": "北向_材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "木材",
                    "2": "铝合金",
                    "3": "塑钢",
                    "4": "其他______"
                },
                "field": "ChuangBeiXiangCaiLiao"
            },
            {
                "fieldname": "北向_颜色",
                "datatype": "CCS",
                "default": "",
                "field": "ChuangBeiXiangYanSe"
            },
            {
                "fieldname": "北向_窗墙比",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜20% ",
                    "2": " 20%-40%",
                    "3": " 40%-60%",
                    "4": "＞60%"
                },
                "field": "ChuangBeiXiangChuangQiangBi"
            },
            {
                "fieldname": "东西向_材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "木材",
                    "2": "铝合金",
                    "3": "塑钢",
                    "4": "其他______"
                },
                "field": "ChuangDongXiXiangCaiLiao"
            },
            {
                "fieldname": "东西向_颜色",
                "datatype": "CCS",
                "default": "",
                "field": "ChuangDongXiXiangYanSe"
            },
            {
                "fieldname": "东西向_窗墙比",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜20%",
                    "2": " 20%-40%",
                    "3": " 40%-60%",
                    "4": "＞60%"
                },
                "field": "ChuangDongXiXiangChuangQiangBi"
            }
        ],
        "class": "Chuang"
    },
    {
        "classname": "公共建筑",
        "childfield": [
            {
                "fieldname": "牌匾_有无",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "GongGongJianZhuPaiBianYouWu"
            },
            {
                "fieldname": "牌匾_位置",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "屋顶",
                    "2": "贴附于建筑物外墙面",
                    "3": "垂直于建筑物外墙",
                    "4": "利用建筑物外窗设置",
                    "5": "其他______"
                },
                "field": "GongGongJianZhuPaiBianWeiZhi"
            },
            {
                "fieldname": "牌匾_颜色",
                "datatype": "CCS",
                "default": "",
                "field": "GongGongJianZhuPaiBianYanSe"
            },
            {
                "fieldname": "牌匾_材质",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "木材",
                    "2": "塑料",
                    "3": "彩钢板",
                    "4": "LED",
                    "5": "PVC板",
                    "6": "喷绘布",
                    "7": "其他______"
                },
                "field": "GongGongJianZhuPaiBianCaiZhi"
            },
            {
                "fieldname": "牌匾_立面比例关系",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜10%",
                    "2": " 10%-20%",
                    "3": "20%-30%",
                    "4": "30%-40%",
                    "5": "＞40"
                },
                "field": "GongGongJianZhuPaiBianLiMianBiLiGuanXi"
            },
            {
                "fieldname": "无障碍设计_有无",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "GongGongJianZhuWuZhangAiSheJiYouWu"
            }
        ],
        "class": "GongGongJianZhu"
    },
    {
        "classname": "历史建筑",
        "childfield": [
            {
                "fieldname": "周围建筑高度关系",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "东侧建筑是否比该建筑高",
                    "2": "西侧建筑是否比该建筑高",
                    "3": "南侧建筑是否比该建筑高",
                    "4": "北侧建筑是否比该建筑高"
                },
                "field": "LiShiJianZhuZhouWeiJianZhuGaoDuGuanXi"
            },
            {
                "fieldname": "传统格局和历史风貌遗存度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜20%",
                    "2": " 20%-40%",
                    "3": " 40%-60%",
                    "4": " 60%-80%",
                    "5": "＞80"
                },
                "field": "LiShiJianZhuChuanTongGeJuHeLiShiFengMaoYiCunDu"
            },
            {
                "fieldname": "近期修缮与维护时间",
                "datatype": "inputtext",
                "datasize": 20,
                "default": "",
                "field": "LiShiJianZhuJinQiXiuShanYuWeiHuShiJian"
            }
        ],
        "class": "LiShiJianZhu"
    },
    {
        "classname": "标志性构筑物",
        "childfield": [
            {
                "fieldname": "类型",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "雕塑",
                    "2": "市政设施",
                    "3": "其他______"
                },
                "field": "BiaoZhiXingGouZhuWuLeiXing"
            },
            {
                "fieldname": "主题",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "人物",
                    "2": "民族符号",
                    "3": "几何图形",
                    "4": "地方标志",
                    "5": "动植物",
                    "6": "其他______"
                },
                "field": "BiaoZhiXingGouZhuWuZhuTi"
            },
            {
                "fieldname": "材质",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "金属",
                    "2": "石材",
                    "3": "粘土砖",
                    "4": "塑料",
                    "5": "木材",
                    "6": "其他______"
                },
                "field": "BiaoZhiXingGouZhuWuCaiZhi"
            },
            {
                "fieldname": "颜色",
                "datatype": "CCS",
                "default": "",
                "field": "BiaoZhiXingGouZhuWuYanSe"
            }
        ],
        "class": "BiaoZhiXingGouZhuWu"
    },
    {
        "classname": "声环境",
        "childfield": [
            {
                "field": "ShengHuanJingZaoShengBenDiZhi",
                "fieldname": "噪声本底值",
                "datatype": "double",
                "datasize": ".1",
                "default": 0,
                "comment": "d"
            },
            {
                "fieldname": "隔声_开口部位",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "一般可感到交通工具的噪声",
                    "2": " 一般感觉不到交通工具的噪声",
                    "3": " 感觉不到交通工具的噪声"
                },
                "field": "ShengHuanJingGeShengKaiKouBuWei"
            },
            {
                "fieldname": "隔声_隔墙",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": " 感觉到有人的谈话声",
                    "2": " 感觉不到有人的谈话声",
                    "3": " 几乎听不到有人的谈话声"
                },
                "field": "ShengHuanJingGeShengGeQiang"
            },
            {
                "fieldname": "隔声楼板(轻撞击)",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": " 椅子的移动声物体掉落的声明显",
                    "2": " 能感觉到椅子的移动声物体的掉落声",
                    "3": " 到椅子的移动声物体的掉落声很小"
                },
                "field": "ShengHuanJingGeShengLouBanQingZhuangJi"
            },
            {
                "fieldname": "隔声楼板(强撞击)",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": " 能明显地感觉到欢闹与走动的声音",
                    "2": " 能听得见欢闹与走动的声音",
                    "3": " 听得见欢闹与走动的声音，但无明显干扰"
                },
                "field": "ShengHuanJingGeShengLouBanQiangZhuangJi"
            },
            {
                "fieldname": "吸声措施",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": " 未使用吸声材料",
                    "2": " 墙壁楼板顶棚等其中一处使用了吸声材料",
                    "3": " 墙壁楼板顶棚上均使用了吸声材料"
                },
                "field": "ShengHuanJingXiShengCuoShi"
            }
        ],
        "class": "ShengHuanJing"
    },
    {
        "classname": "光环境",
        "childfield": [
            {
                "field": "GuangHuanJingCeMianCaiGuangXiShu",
                "fieldname": "侧面采光系数",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "GuangHuanJingCeMianCaiGuangZhaoDu",
                "fieldname": "侧面采光照度",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "GuangHuanJingDingBuCaiGuangXiShu",
                "fieldname": "顶部采光系数",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "GuangHuanJingDingBuCaiGuangZhaoDu",
                "fieldname": "顶部采光照度",
                "datatype": "double",
                "datasize": ".1",
                "default": 0,
                "comment": "l"
            },
            {
                "fieldname": "采光设备",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "无采光设备",
                    "2": " 有一种采光设备",
                    "3": " 有两种以上的采光设备，且具有高性能"
                },
                "field": "GuangHuanJingCaiGuangSheBei"
            },
            {
                "fieldname": "眩光对策",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "用窗帘进行控制",
                    "2": " 靠窗檐窗帘进行控制"
                },
                "field": "GuangHuanJingXuanGuangDuiCe"
            },
            {
                "fieldname": "照明控制",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "无法进行照明控制",
                    "2": " 粗略的照明控制",
                    "3": " 精细的照明控制"
                },
                "field": "GuangHuanJingZhaoMingKongZhi"
            }
        ],
        "class": "GuangHuanJing"
    },
    {
        "classname": "热环境",
        "childfield": [
            {
                "fieldname": "集中供暖",
                "datatype": "bool",
                "default": "否",
                "items": {
                    "1": "是",
                    "2": "否"
                },
                "field": "ReHuanJingJiZhongGongNuan"
            },
            {
                "fieldname": "采暖方式",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "火炕",
                    "2": "火炉",
                    "3": "土暖气",
                    "4": "电暖气",
                    "5": "火墙",
                    "6": "热水供暖",
                    "7": "空调",
                    "8": "其他"
                },
                "field": "ReHuanJingCaiNuanFangShi"
            },
            {
                "field": "ReHuanJingDongJiShiWen",
                "fieldname": "冬季室温",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "ReHuanJingXiaJiShiWen",
                "fieldname": "夏季室温",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "夏季降温措施",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "往地面洒水",
                    "2": "绿化遮阴",
                    "3": "构筑物遮阴",
                    "4": "建筑自遮挡",
                    "5": "内遮阳",
                    "6": "其他"
                },
                "field": "ReHuanJingXiaJiJiangWenCuoShi"
            },
            {
                "fieldname": "冬季防风措施",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "围墙挡风",
                    "2": "植物挡风",
                    "3": "构筑物挡风",
                    "4": "建筑自设挡风构件",
                    "5": "其他"
                },
                "field": "ReHuanJingDongJiFangFengCuoShi"
            },
            {
                "fieldname": "外墙保温隔热类型",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "外墙外保温",
                    "2": "外墙内保温",
                    "3": "自保温"
                },
                "field": "ReHuanJingWaiQiangBaoWenGeReLeiXing"
            },
            {
                "fieldname": "外墙保温隔热材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "苯板",
                    "2": "无机保温砂浆",
                    "3": "草板",
                    "4": "加气泡沫混凝土",
                    "5": "隔热反射涂料"
                },
                "field": "ReHuanJingWaiQiangBaoWenGeReCaiLiao"
            },
            {
                "fieldname": "外墙保温隔热厚度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜20mm",
                    "2": "20-40mm",
                    "3": "41-60mm",
                    "4": "61-80mm",
                    "5": "81-100mm",
                    "6": "＞100mm"
                },
                "field": "ReHuanJingWaiQiangBaoWenGeReHouDu"
            },
            {
                "fieldname": "屋顶保温隔热类型",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "屋顶外保温",
                    "2": "吊顶内保温",
                    "3": "通风屋面",
                    "4": "蓄水屋面",
                    "5": "种植屋面",
                    "6": "屋顶遮阳"
                },
                "field": "ReHuanJingWuDingBaoWenGeReLeiXing"
            },
            {
                "fieldname": "屋顶保温隔热材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "炉渣",
                    "2": "苯板",
                    "3": "珍珠岩",
                    "4": "草板",
                    "5": "农作物秸秆",
                    "6": "稻壳木屑"
                },
                "field": "ReHuanJingWuDingBaoWenGeReCaiLiao"
            },
            {
                "fieldname": "屋顶保温隔热厚度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜20mm",
                    "2": "20-40mm",
                    "3": "41-60mm",
                    "4": "61-80mm",
                    "5": "81-100mm",
                    "6": "＞100mm"
                },
                "field": "ReHuanJingWuDingBaoWenGeReHouDu"
            },
            {
                "fieldname": "外窗冬季保温措施",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "糊窗缝",
                    "2": "窗外加塑料膜",
                    "3": "窗内加塑料膜",
                    "4": "窗内加一层玻璃"
                },
                "field": "ReHuanJingWaiChuangDongJiBaoWenCuoShi"
            },
            {
                "fieldname": "外门冬季保温措施",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "挂棉门帘",
                    "2": "外加门斗",
                    "3": "附加阳光间",
                    "4": "门外加塑料膜"
                },
                "field": "ReHuanJingWaiMenDongJiBaoWenCuoShi"
            },
            {
                "fieldname": "地面保温隔热材料",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "炉渣",
                    "2": "苯板",
                    "3": "珍珠岩",
                    "4": "加气泡沫混凝土",
                    "5": "陶粒混凝土"
                },
                "field": "ReHuanJingDiMianBaoWenGeReCaiLiao"
            },
            {
                "fieldname": "地面保温隔热厚度",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "＜20mm",
                    "2": "20-40mm",
                    "3": "41-60mm",
                    "4": "61-80mm",
                    "5": "81-100mm",
                    "6": "＞100mm"
                },
                "field": "ReHuanJingDiMianBaoWenGeReHouDu"
            },
            {
                "fieldname": "设计考虑",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "设计中未充分考虑降低经窗户外墙屋顶楼板和外廊进入室内的热量，遮阳和隔热效果差",
                    "2": "设计中考虑了降低经窗户外墙屋顶楼板和外廊进入室内的热量，在遮阳和隔热方面不存在问题",
                    "3": "充分考虑降低经窗户外墙屋顶楼板和外廊进入室内的热量，具有良好的遮阳和隔热效果"
                },
                "field": "ReHuanJingSheJiKaoLv"
            },
            {
                "fieldname": "加湿功能",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "ReHuanJingJiaShiGongNen"
            },
            {
                "field": "ReHuanJingShiNaShiDu",
                "fieldname": "室内湿度",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            }
        ],
        "class": "ReHuanJing"
    },
    {
        "classname": "室内空气品质",
        "childfield": [
            {
                "fieldname": "窗户是否可开闭",
                "datatype": "bool",
                "default": "否",
                "items": {
                    "1": "是",
                    "2": "否"
                },
                "field": "ShiNaKongQiPinZhiChuangHuShiFuKeKaiBi"
            },
            {
                "field": "ShiNaKongQiPinZhiYouXiaoZiRanTongFengKaiKouMianJi",
                "fieldname": "有效自然通风开口面积",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "CO2的监测",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "采用手工测量的系统",
                    "2": "采用空气品质实时中央检测系统"
                },
                "field": "ShiNaKongQiPinZhiCO2DeJianCe"
            },
            {
                "fieldname": "吸烟控制",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "设置吸烟室，采取了防止非吸烟者被动吸烟的最低限度措施",
                    "2": "全楼禁烟，或设置吸烟室很好的采取了防止非吸烟者被动吸烟的措施"
                },
                "field": "ShiNaKongQiPinZhiXiYanKongZhi"
            }
        ],
        "class": "ShiNaKongQiPinZhi"
    },
    {
        "classname": "能源利用",
        "childfield": [
            {
                "field": "NenYuanLiYongGongNuanRanLiaoLeiXingDian",
                "fieldname": "供暖燃料类型_电",
                "datatype": "double",
                "datasize": ".1",
                "default": 0,
                "comment": "°"
            },
            {
                "fieldname": "供暖燃料类型_煤",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "t",
                "field": "NenYuanLiYongGongNuanRanLiaoLeiXingMei"
            },
            {
                "fieldname": "供暖燃料类型_木柴",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "t",
                "field": "NenYuanLiYongGongNuanRanLiaoLeiXingMuChai"
            },
            {
                "fieldname": "供暖燃料类型_秸秆",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "t",
                "field": "NenYuanLiYongGongNuanRanLiaoLeiXingJieGan"
            },
            {
                "fieldname": "供暖燃料类型_其他",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "",
                "field": "NenYuanLiYongGongNuanRanLiaoLeiXingQiTa"
            },
            {
                "field": "NenYuanLiYongGongNuanGuoLuReXiaoLv",
                "fieldname": "供暖锅炉热效率",
                "datatype": "double",
                "datasize": ".1",
                "default": 0,
                "comment": "%"
            },
            {
                "fieldname": "可再生能源直接利用",
                "datatype": "selecttext",
                "datasize": 200,
                "default": "",
                "items": {
                    "1": "采光利用：方案设计中包括利用自然光取代照明设备的自然采光系统。例如：反光板天窗侧高窗等",
                    "2": "通风利用：方案设计中包括有效的自然通风系统。例如：自动风门夜间通风中庭通风太阳烟囱通风塔等",
                    "3": "地热利用：方案设计中包括可替代冷热源和空调设备减小空调负荷的地热利用系统。例如：地下埋管地道等",
                    "4": "其他：规划有其他有效的直接利用可再生能源的系统。"
                },
                "field": "NenYuanLiYongKeZaiShengNenYuanZhiJieLiYong"
            },
            {
                "fieldname": "可再生能源转换利用",
                "datatype": "selecttext",
                "datasize": 200,
                "default": "",
                "items": {
                    "1": "太阳光利用：方案设计中考虑了采用太阳能发电替代部分电力设备。例如：太阳能光电池板等",
                    "2": "太阳能热利用：方案设计中考虑了有效利用太阳能以降低冷热源设备的能耗。例如：太阳能集热板太阳能真空管热水器",
                    "3": "废热利用：方案设计中考虑了废热利用以提高冷热源设备的效率。例如：井水水源热泵河水水源热泵等",
                    "4": "其他：规划有其他有效的转换利用可再生能源的系统。"
                },
                "field": "NenYuanLiYongKeZaiShengNenYuanZhuanHuanLiYong"
            },
            {
                "fieldname": "太阳能热水系统有无",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "NenYuanLiYongTaiYangNenReShuiXiTongYouWu"
            },
            {
                "fieldname": "太阳能热水系统性能",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": " 选用紧凑式直接加热自然循环的太阳能热水系统",
                    "2": " 利用太阳能供热供暖时，设置其他能源辅助加热设备",
                    "3": " 辅助热源与供暖或炊事系统相结合",
                    "4": " 选用分离式或间接式太阳能热水系统时，管路设计应为最短，并采取保温措施"
                },
                "field": "NenYuanLiYongTaiYangNenReShuiXiTongXingNen"
            },
            {
                "fieldname": "生物质能利用有无",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "NenYuanLiYongShengWuZhiNenLiYongYouWu"
            },
            {
                "field": "NenYuanLiYongShengWuZhiNenNenYuanXiaoLv",
                "fieldname": "生物质能能源效率",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "NenYuanLiYongZaoJuReXiaoLv",
                "fieldname": "灶具热效率",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "开关阀控孔径",
                "datatype": "int",
                "default": 0,
                "comment": "mm",
                "field": "NenYuanLiYongKaiGuanFaKongKongJing"
            },
            {
                "field": "NenYuanLiYongDongJiFaJiaoWenDu",
                "fieldname": "冬季发酵温度",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "规模化沼气工程采用加热方式维持所需热量进行保温",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "NenYuanLiYongGuiMoHuaZhaoQiGongChengCaiYongJiaReFangShi"
            },
            {
                "fieldname": "地源热泵系统有无",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "NenYuanLiYongDiYuanReBengXiTongYouWu"
            },
            {
                "field": "NenYuanLiYongDongJiDiMaiGuanHuanReQiJinKouShuiWen",
                "fieldname": "冬季地埋管换热器进口水温",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            }
        ],
        "class": "NenYuanLiYong"
    },
    {
        "classname": "资源材料利用",
        "childfield": [
            {
                "fieldname": "节水措施",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "无节水计划",
                    "2": "在主要阀门处安装节水装置",
                    "3": "除安装节水装置外，还采用了节水型设备（如声控冲水系统节水厕所等）"
                },
                "field": "ZiYuanCaiLiaoLiYongJieShuiCuoShi"
            },
            {
                "fieldname": "雨水利用系统",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "无雨水利用措施",
                    "2": "有雨水利用措施，雨水利用率在20%以上"
                },
                "field": "ZiYuanCaiLiaoLiYongYuShuiLiYongXiTong"
            },
            {
                "fieldname": "杂排水再利用系统",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "无杂排水再利用措施",
                    "2": "有杂排水再利用措施",
                    "3": "有杂排水利用及污水再利用设备和措施"
                },
                "field": "ZiYuanCaiLiaoLiYongZaPaiShuiZaiLiYongXiTong"
            },
            {
                "fieldname": "灌溉节水措施",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "采用节水灌溉系统",
                    "2": "设置土壤湿度感应器雨天关闭装置等节水控制措施",
                    "3": "灌溉用水采用河水收集雨水",
                    "4": "灌溉采用微喷灌滴灌渗灌等高效节水灌溉方式",
                    "5": "种植无需永久灌溉植物"
                },
                "field": "ZiYuanCaiLiaoLiYongGuanGaiJieShuiCuoShi"
            },
            {
                "field": "ZiYuanCaiLiaoLiYongZiYuanDeZaiLiYongLv",
                "fieldname": "资源的再利用率",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "ZiYuanCaiLiaoLiYongKeChiXuMuCaiShiYongLv",
                "fieldname": "可持续木材使用率",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "对健康无害材料使用",
                "datatype": "selecttext",
                "datasize": 20,
                "default": "",
                "items": {
                    "1": "1种",
                    "2": "2种",
                    "3": "3种",
                    "4": "4种及以上"
                },
                "field": "ZiYuanCaiLiaoLiYongDuiJianKangWuHaiCaiLiaoShiYong"
            },
            {
                "fieldname": "既有建筑主体再利用",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "不进行再利用",
                    "2": "对部分建筑框架进行再利用",
                    "3": "对全部建筑框架进行再利用旧材料再利用量（建筑主体材料的再利用率）"
                },
                "field": "ZiYuanCaiLiaoLiYongJiYouJianZhuZhuTiZaiLiYong"
            },
            {
                "field": "ZiYuanCaiLiaoLiYongJiuCaiLiaoZaiLiYongLiangJianZhuZhuTiCaiLiaoDeZaiLiYongLv",
                "fieldname": "旧材料再利用量（建筑主体材料的再利用率）",
                "datatype": "double",
                "datasize": ".1",
                "default": 0,
                "comment": "%"
            }
        ],
        "class": "ZiYuanCaiLiaoLiYong"
    },
    {
        "classname": "施工管理",
        "childfield": [
            {
                "fieldname": "环境保护1",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "ShiGongGuanLiHuanJingBaoHu1"
            },
            {
                "fieldname": "环境保护2",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "ShiGongGuanLiHuanJingBaoHu2"
            },
            {
                "field": "ShiGongGuanLiHuanJingBaoHu3",
                "fieldname": "环境保护3",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "环境保护4",
                "datatype": "double",
                "datasize": ".2",
                "default": 0,
                "comment": "t",
                "field": "ShiGongGuanLiHuanJingBaoHu4"
            },
            {
                "fieldname": "资源节约1",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "制定并实施施工节能和用能方案",
                    "2": "监测并记录施工区生活区的能耗",
                    "3": "监测并记录主要建筑材料设备从供货商提供的货源地到施工现场运输的能耗",
                    "4": "监测并记录建筑施工废弃物从施工现场到废弃物处理/回收中心运输的能耗"
                },
                "field": "ShiGongGuanLiZiYuanJieYue1"
            },
            {
                "fieldname": "资源节约2",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "制定并实施施工节水和用水方案",
                    "2": "监测并记录施工区生活区的水耗数据",
                    "3": "监测并记录基坑降水的抽取量排放量和利用量数据"
                },
                "field": "ShiGongGuanLiZiYuanJieYue2"
            },
            {
                "field": "ShiGongGuanLiZiYuanJieYue3",
                "fieldname": "资源节约3",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "ShiGongGuanLiZiYuanJieYue4",
                "fieldname": "资源节约4",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "ShiGongGuanLiZiYuanJieYue5",
                "fieldname": "资源节约5",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "field": "ShiGongGuanLiZiYuanJieYue6",
                "fieldname": "资源节约6",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "过程管理1",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "ShiGongGuanLiGuoChengGuanLi1"
            },
            {
                "fieldname": "过程管理2",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "ShiGongGuanLiGuoChengGuanLi2"
            },
            {
                "fieldname": "过程管理3",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "ShiGongGuanLiGuoChengGuanLi3"
            },
            {
                "fieldname": "过程管理4",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "对保证建筑结构耐久性的技术措施进行相应检测并记录",
                    "2": "对有节能环保要求的设备进行相应检测并记录",
                    "3": "对有节能环保要求的装修装饰材料进行相应检测并记录"
                },
                "field": "ShiGongGuanLiGuoChengGuanLi4"
            },
            {
                "fieldname": "过程管理5",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "孔洞预留和装修面层固定件的预埋",
                    "2": "工程竣工时主要功能空间的使用功能完备，装修到位",
                    "3": "提供装修材料检测报告机电设备检测报告性能复试报告",
                    "4": "提供建筑竣工验收证明建筑质量保修书使用说明书",
                    "5": "提供业主反馈意见书"
                },
                "field": "ShiGongGuanLiGuoChengGuanLi5"
            },
            {
                "fieldname": "过程管理6",
                "datatype": "bool",
                "default": "无",
                "items": {
                    "1": "有",
                    "2": "无"
                },
                "field": "ShiGongGuanLiGuoChengGuanLi6"
            }
        ],
        "class": "ShiGongGuanLi"
    },
    {
        "classname": "运行管理",
        "childfield": [
            {
                "fieldname": "管理制度1",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "具有ISO 14001环境管理体系认证",
                    "2": "具有ISO, 9001质量管理体系认证",
                    "3": "具有现行国家标准《能源管理体系要求》GB/T 23331的能源管理体系认证"
                },
                "field": "YunXingGuanLiGuanLiZhiDu1"
            },
            {
                "fieldname": "管理制度2",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "节能节水节材绿化等相关设施操作规程在现场明示，操作人员严格遵守规定",
                    "2": "节能节水设施运行具有完善的应急预案"
                },
                "field": "YunXingGuanLiGuanLiZhiDu2"
            },
            {
                "fieldname": "管理制度3",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "物业管理机构的工作考核体系中包含能源资源管理激励机制",
                    "2": "与租用者的合同中包含节能条款",
                    "3": "采用合同能源管理模式"
                },
                "field": "YunXingGuanLiGuanLiZhiDu3"
            },
            {
                "fieldname": "管理制度4",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "有绿色教育宣传工作记录",
                    "2": "向使用者提供绿色设施使用手册",
                    "3": "相关绿色行为与成效获得公共媒体报道"
                },
                "field": "YunXingGuanLiGuanLiZhiDu4"
            },
            {
                "fieldname": "管理制度5",
                "datatype": "int",
                "default": 0,
                "field": "YunXingGuanLiGuanLiZhiDu5"
            },
            {
                "fieldname": "技术管理1",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "具有设施设备的检查调试运行标定记录，且记录完整",
                    "2": "制定并实施设备能效改进等方案"
                },
                "field": "YunXingGuanLiJiShuGuanLi1"
            },
            {
                "fieldname": "技术管理2",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "制定空调通风设备和风管的检查和清洗计划",
                    "2": "实施选项1中的检查和清洗计划，且记录保存完整"
                },
                "field": "YunXingGuanLiJiShuGuanLi2"
            },
            {
                "fieldname": "技术管理3",
                "datatype": "selecttext",
                "datasize": 100,
                "default": "",
                "items": {
                    "1": "定期进行水质检测，记录完整准确",
                    "2": "用水量记录完整准确"
                },
                "field": "YunXingGuanLiJiShuGuanLi3"
            },
            {
                "fieldname": "技术管理4",
                "datatype": "selecttext",
                "datasize": 200,
                "default": "",
                "items": {
                    "1": "居住建筑的智能化系统满足现行行业标准《居住区智能化系统配置与技术要求》CJ/T 174的基本配置要求，公共建筑的智能化系统满足现行国家标准《智能建筑设计标准》GB 50314的基础配置要求",
                    "2": "智能化系统工作正常，符合设计要求"
                },
                "field": "YunXingGuanLiJiShuGuanLi4"
            },
            {
                "fieldname": "技术管理5",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "设置物业信息管理系统",
                    "2": "物业管理信息系统功能完备",
                    "3": "记录数据完整"
                },
                "field": "YunXingGuanLiJiShuGuanLi5"
            },
            {
                "fieldname": "环境管理1",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "建立和实施化学药品管理责任制",
                    "2": "病虫害防治用品使用记录完整",
                    "3": "采用生物制剂仿生制剂等无公害防治技术"
                },
                "field": "YunXingGuanLiHuanJingGuanLi1"
            },
            {
                "field": "YunXingGuanLiHuanJingGuanLi2",
                "fieldname": "环境管理2",
                "datatype": "double",
                "datasize": ".1",
                "default": 0
            },
            {
                "fieldname": "环境管理3",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "垃圾站(间)定期冲洗",
                    "2": "垃圾及时清运处置",
                    "3": "周边无臭味，用户反映良好"
                },
                "field": "YunXingGuanLiHuanJingGuanLi3"
            },
            {
                "fieldname": "环境管理4",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "垃圾分类收集率达到90％",
                    "2": "可回收垃圾的回收比例达到90%",
                    "3": "对可生物降解垃圾进行单独收集和合理处置",
                    "4": "对有害垃圾进行单独收集和合理处置"
                },
                "field": "YunXingGuanLiHuanJingGuanLi4"
            },
            {
                "fieldname": "环境管理5",
                "datatype": "selecttext",
                "datasize": 50,
                "default": "",
                "items": {
                    "1": "记录齐全",
                    "2": "维护维修及时，正常使用",
                    "3": "利用时间记录齐全数据完备"
                },
                "field": "YunXingGuanLiHuanJingGuanLi5"
            }
        ],
        "class": "YunXingGuanLi"
    }
]


	module.exports = data;