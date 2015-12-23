/**
 * Created by liu on 15/11/18.
 */

module.exports = {
    "JZJBXXBianHao": {
        "type": "input",
        "comment": "字母+数字（对建筑编号后分别录入下列内容）",
        "namezh": "编号",
        "judgeReference":'',
    },
    "JZJBXXMingChen": {
        "type": "input",
        "comment": "文字（居住建筑为户主姓名、公共建筑为建筑名称）",
        "namezh": "名称",
        "judgeReference":'',
    },
    "JZJBXXJianZhuXingZhi": {
        "type": "select",
        "option": {
            "1": "居住建筑",
            "2": "公共建筑"
        },
        "namezh": "建筑性质",
        "judgeReference":'',
    },
    "JZJBXXZongJianZhuMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "总建筑面积",
        "judgeReference":'住宅建筑设计中宜加大进深、减小每户面宽，适当增多每幢住宅建筑的单元数和户数，提高建筑密度和容积率。',
    },
    "JZJBXXJianZhuJiDiMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "建筑基底面积",
        "judgeReference":'在住宅的平面组合方面，提倡建立多户并联的低层住宅，通过加大每栋建筑物的体量来获得建筑形体系数的降低（建筑物外表面积与建筑物体积的比值），减少能耗、节约市政管网的投资并可节约土地；<img class="img" src="/image/2.jpg">',
    },
    "JZJBXXDiXiaKongJianMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "地下空间面积",
        "judgeReference":'建筑的地下空间和高大进深的地上空间，由于物理的封闭，很容易出现天然采光不足的情况。通过反光板、棱镜玻璃窗、天窗、下沉庭院等设计手法的采用，以及导光管等技术的采用，可以有效改善这些空间的天然采光效果。',
    },
    "JZJBXXTingYuanMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "庭院面积",
        "judgeReference":'在宅基地改造方面，可将宅基地内的闲置土地划到宅基地以外，由集体进行绿化改造、土地整理，形成道路绿带、开放绿地、粮食晒场和公共活动空间，将前后院的种植用地划到宅基地以外，仍作为家庭种植用地使用，用地性质由家庭的居住用地变为耕地。',
    },
    "JZJBXXChaoXiang": {
        "type": "select",
        "option": {
            "1": "南北向",
            "2": "东西向",
            "3": "东北向",
            "4": "东南向"
        },
        "namezh": "朝向",
        "judgeReference":'在建筑的选址、朝向、布局、形态等方面，充分考虑当地气候特征和生态环境，尤其是严寒地区村镇特有的冬季寒冷夏季炎热的气候特征。<img class="img" src="/image/86.jpg">',
    },
    "JZJBXXJieGouXingShi": {
        "type": "select",
        "option": {
            "1": "木结构",
            "2": "砖混结构",
            "3": "石木结构",
            "4": "土木结构",
            "5": "混凝土框架结构",
            "6": "钢构架复合墙板"
        },
        "namezh": "结构形式",
        "judgeReference":'绿色农房建造应传承当地的传统构造方式，并结合现代工艺及材料对其进行改良和提升。严寒地区农村多数为一层独立式住宅，以砖混结构为主，随着技术和经济条件的进步，框架结构、钢结构也有了一些应用，但还处于初始阶段。钢筋混凝土结构、钢框架结构相对于传统砖混结构，安全性高，抗震性显著提升。',
    },
    "JZJBXXCengShu": {
        "type": "select",
        "option": {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "6层以上"
        },
        "namezh": "层数",
        "judgeReference":'适当提高住宅层数，对于非农户提倡建设水平分户的单元式住宅，达到节约用地的目的，严寒地区农村的经济水平较低，住宅层数不宜过高，一般将一层平房改建为二层或三层即可。',
    },
    "JZJBXXGaoDu": {
        "type": "select",
        "option": {
            "1": "＜5m",
            "2": "5-10m",
            "3": "10-20m",
            "4": "20-30m",
            "5": "＞30m"
        },
        "namezh": "高度",
        'judgeReference':'属于传统村落和风景保护区范围的绿色农房，其形制、高度、屋顶、墙体、色彩等应与其周边传统建筑及景观风貌保持协调。农村住房的体型应简单、规整，平、立面不应出现过多的局部凹凸部位，立面不宜高度不一。'
    },
    "JZJBXXJianZhuFengGe": {
        "type": "select",
        "option": {
            "1": "现代",
            "2": "欧式",
            "3": "中式",
            "4": "其他"
        },
        "namezh": "建筑风格",
        "judgeReference":'建筑风格应整洁大方，建筑立面丰富，应配有必要的阳台、窗台、雨篷等构件。农村住房的体型应简单、规整，平、立面不应出现过多的局部凹凸部位，立面不宜高度不一。必须重视对传统民俗文化的继承和利用，且与当地环境和田园风光相协调。\na.建筑风格与规模和周围环境保持协调，保持历史文化与景观的连续性；\nb.为了保留当地的地域和民族特色，村镇的建筑应充分反映当地风格。绿色农房设计应在建筑形式、细部设计和装饰方面充分吸取地方、民族的建筑风格，采用传统构件和装饰。',
    },
    "JZJBXXJianZaoNianDai": {
        "type": "select",
        "option": {
            "1": "2010年后",
            "2": "2000-2010年",
            "3": "1990-2000年",
            "4": "1980-1990年",
            "5": "1970-1980年",
            "6": "1970年前"
        },
        "namezh": "建造年代",
        "judgeReference":'',
    },
    "JZJBXXShiFuShiLiShiJianZhu": {
        "type": "boolean",
        "namezh": "是否是历史建筑"
    },
    "LSJZCaiLiao": {
        "type": "select",
        "option": {
            "1": "粘土砖",
            "2": "石材",
            "3": "板材",
            "4": "砌块",
            "5": "草土坯",
            "6": "其他"
        },
        "namezh": "材料",
        "judgeReference":'',
    },
    "LSJZGaoDu": {
        "type": "select",
        "option": {
            "1": "＜5m",
            "2": "5-10m",
            "3": "10-20m",
            "4": "20-30m",
            "5": "＞30m"
        },
        "namezh": "高度",
        "judgeReference":'',
    },
    "LSJZCengShu": {
        "type": "select",
        "option": {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "4层以上"
        },
        "namezh": "层数",
        "judgeReference":'',
    },
    "LSJZZBJZGDSFBGJZGDongCeJianZhu": {
        "type": "select",
        "option": {
            "1": "是",
            "2": "不是"
        },
        "namezh": "东侧建筑"
    },
    "LSJZZBJZGDSFBGJZGXiCeJianZhu": {
        "type": "select",
        "option": {
            "1": "是",
            "2": "不是"
        },
        "namezh": "西侧建筑"
    },
    "LSJZZBJZGDSFBGJZGNanCeJianZhu": {
        "type": "select",
        "option": {
            "1": "是",
            "2": "不是"
        },
        "namezh": "南侧建筑"
    },
    "LSJZZBJZGDSFBGJZGBeiCeJianZhu": {
        "type": "select",
        "option": {
            "1": "是",
            "2": "不是"
        },
        "namezh": "北侧建筑"
    },
    "LSJZChuanTongGeJuHeLiShiFengMaoYiCunDu": {
        "type": "select",
        "option": {
            "1": "＜20%",
            "2": "20%-40%",
            "3": "40%-60%",
            "4": "60%-80%",
            "5": "＞80%"
        },
        "namezh": "传统格局和历史风貌遗存度"
    },
    "TYTZYuanLuoBuJuMoShi": {
        "type": "select",
        "option": {
            "1": "前院",
            "2": "后院",
            "3": "前后院",
            "4": "内院",
            "5": "侧院"
        },
        "namezh": "院落布局模式"
    },
    "TYTZDiMianPuZhuang": {
        "type": "select",
        "option": {
            "1": "土",
            "2": "水泥",
            "3": "粘土砖",
            "4": "铺地砖",
            "5": "其他"
        },
        "namezh": "地面铺装"
    },
    "TYTZYLGNShengChan": {
        "type": "selectmult",
        "option": {
            "1": "家禽养殖",
            "2": "家畜养殖",
            "3": "菜园",
            "4": "仓房",
            "5": "车库",
            "6": "农机库",
            "7": "其他"
        },
        "namezh": "生产"
    },
    "TYTZYLGNShengHuo": {
        "type": "selectmult",
        "option": {
            "1": "做饭",
            "2": "洗漱",
            "3": "晾晒",
            "4": "厕所",
            "5": "沼气池",
            "6": "其他"
        },
        "namezh": "生活"
    },
    "TYTZYLGNYuLe": {
        "type": "selectmult",
        "option": {
            "1": "棋牌桌",
            "2": "座椅",
            "3": "凉棚",
            "4": "其他"
        },
        "namezh": "娱乐"
    },
    "TYTZYLGNZhiBeiLvHua": {
        "type": "selectmult",
        "option": {
            "1": "乔木",
            "2": "灌木",
            "3": "花卉/草丛",
            "4": "其他"
        },
        "namezh": "植被绿化"
    },
    "TYTZHLYWQGaoDu": {
        "type": "select",
        "option": {
            "1": "0.5-1m",
            "2": "1-1.5m",
            "3": "1.5-2m",
            "4": "＞2m"
        },
        "namezh": "高度"
    },
    "TYTZHLYWQCaiZhi": {
        "type": "select",
        "option": {
            "1": "竹木",
            "2": "砖石",
            "3": "铁艺",
            "4": "其他"
        },
        "namezh": "材质"
    },
    "TYTZShiFuLvHua": {
        "type": "boolean",
        "namezh": "是否绿化"
    },
    "TYTZLHLvHuaMianJi": {
        "type": "input",
        "comment": "数字m2",
        "namezh": "绿化面积"
    },
    "TYTZLHLvHuaFangShi": {
        "type": "selectmultornull",
        "option": {
            "1": "地面绿化",
            "2": "墙体绿化",
            "3": "屋顶绿化",
            "4": "其他"
        },
        "namezh": "绿化方式"
    },
    "JZWBTZWDCaiLiao": {
        "type": "select",
        "option": {
            "1": "彩钢板（铁皮）",
            "2": "水泥瓦",
            "3": "砖瓦",
            "4": " 青瓦",
            "5": "石板瓦",
            "6": " 麦秸或稻草",
            "7": "陶瓷",
            "8": "塑料",
            "9": "其他"
        },
        "namezh": "材料",
        'judgeReference':'按材料分为有木屋架、钢屋架、钢木屋架、钢筋混凝土屋架等。鼓励使用当地的石材、生土、竹木等乡土材料。-10分钟可以到达，减少机动车出行需求。设施整合集中布局、协调互补，和社会共享可提高使用效率、节约用地和投资。尊重地方文化，延续历史文脉，建设具有地域特色的现代建筑，公共建筑集中设置，配套的设施设备共享，也是提高服务效率、节约资源有效方法。兼容2种以上主要公共服务功能是指主要服务功能在建筑内部混合布局，部分空间共享使用，如建筑中设有共用的会议设施、展览设施、健身设施以及交往空间、休息空间等；小学、中学、大学等专用运动场所科学管理，在非校用时间向社会公众开放；文化、体育设施的室外活动场地错时向社会开放；办公建筑的室外场地在非办公时间向周边居民开放等。公共空间的共享既可增加公众的活动场所，有利陶冶情操、增进社会交往，又可提高各类设施和场地的使用效率，是绿色建筑倡导和鼓励的建设理念。',
    },
    "JZWBTZWDXingShi": {
        "type": "select",
        "option": {
            "1": "平屋顶",
            "2": "等架双坡顶",
            "3": "不等架双坡顶",
            "4": "单坡顶",
            "5": "其他"
        },
        "namezh": "形式",
        'judgeReference':'根据严寒地区村镇的实际情况，村镇绿色建筑设计主要采用平屋顶、单坡顶、双坡顶和四坡顶，其中坡屋顶能够有效解决严寒气候等因素引起的变形，避免屋面积水积雪，增加室内可用空间，同时使住宅立面更加高耸美观，坡屋顶的坡度较陡可适应雨雪天气。<img class="img" src="/image/7.jpg">',
    },
    "JZWBTZWDYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZWDWuJiZhuangShiGouJian": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "屋脊装饰构件",
        'judgeReference':'细部设计和装饰方面充分吸取地方、民族的建筑风格，采用传统构件和装饰。',
    },
    "JZWBTZWDWuDingLvHua": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "屋顶绿化",
        'judgeReference':''
    },
    "JZWBTZWDTaiYangNenWuDing": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "太阳能屋顶",
        'judgeReference':''
    },
    "JZWBTZYCWeiZhi": {
        "type": "select",
        "option": {
            "1": "屋顶",
            "2": "屋前",
            "3": "屋后",
            "4": "屋侧"
        },
        "namezh": "位置"
    },
    "JZWBTZYCGaoDu": {
        "type": "select",
        "option": {
            "1": "＜10cm",
            "2": "10cm-20cm",
            "3": "20cm-30cm",
            "4": "＞30cm"
        },
        "namezh": "高度"
    },
    "JZWBTZYCBiaoMianCaiLiao": {
        "type": "select",
        "option": {
            "1": "粘土砖",
            "2": "石材",
            "3": " 饰面砂浆",
            "4": "其他"
        },
        "namezh": "表面材料"
    },
    "JZWBTZYCYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZQTCaiLiao": {
        "type": "select",
        "option": {
            "1": "粘土砖",
            "2": "石材",
            "3": "板材",
            "4": "砌块",
            "5": "草土坯",
            "6": "其他"
        },
        "namezh": "材料",
        'judgeReference':'绿色农房建造应传承当地的传统构造方式，并结合现代工艺及材料对其进行改良和提升。鼓励使用当地的石材、生土、竹木等乡土材料。综合考虑技术可操作性、节能环保性、经济合理性，结合严寒地区气候特征，推荐适用于严寒地区村镇建筑的砌体种类见表1。不同类型村镇可按照其各自实际经济技术情况对外墙构造进行选择应用，将村镇依照其经济条件进行划分，分为经济条件较好村镇和经济条件一般村镇。在结构形式方面，建议经济条件较好村镇选用框架结构、钢混结构、砖混结构；建议经济条件一般村镇选用砖混结构、砖木结构。',
    },
    "JZWBTZQTWaiQiangZhuangShiCaiLiao": {
        "type": "selectmultornull",
        "option": {
            "1": "瓷砖",
            "2": "涂料",
            "3": "饰面砂浆",
            "4": "石材",
            "5": "铝板",
            "6": "铝塑板",
            "7": "水泥板",
            "8": "防腐木",
            "9": "其他"
        },
        "namezh": "外墙装饰材料",
        'judgeReference':'为了保持建筑物的风格、视觉效果和人居环境，装饰装修材料在一定使用年限后会进行更新替换。如果使用易沾污、难维护及耐久性差的装饰装修材料，则会在一定程度上增加建筑物的维护成本，且施工也会来带有毒有害物质的排放、粉尘及噪音等问题。使用清水混凝土可减少装饰装修材料用量。 本条重点对对外立面材料的耐久性提出了要求，详见表2。',
    },
    "JZWBTZQTZhuTiSe": {
        "type": "CCS",
        "namezh": "主体色"
    },
    "JZWBTZQTFuZhuSe": {
        "type": "CCS",
        "namezh": "辅助色"
    },
    "JZWBTZQTGouJian": {
        "type": "selectmultornull",
        "option": {
            "1": "装饰图案",
            "2": "贴面雕塑",
            "3": "其他",
            "4": "无装饰\t"
        },
        "namezh": "构件",
        'judgeReference':'细部设计和装饰方面充分吸取地方、民族的建筑风格，采用传统构件和装饰。<img class="img" src="/image/91.jpg"><img class="img" src="/image/92.jpg"><img class="img" src="/image/93.jpg">',
    },
    "JZWBTZQTZhuangShiNaRong": {
        "type": "select",
        "option": {
            "1": "人物",
            "2": "民族符号",
            "3": "几何图形",
            "4": "地方标志",
            "5": "动植物",
            "6": "其他"
        },
        "namezh": "装饰内容"
    },
    "JZWBTZYouWuTaiJi": {
        "type": "boolean",
        "namezh": "有无台基"
    },
    "JZWBTZTJBiaoMianCaiLiao": {
        "type": "select",
        "option": {
            "1": "瓷砖",
            "2": "涂料",
            "3": "饰面砂浆",
            "4": "石材",
            "5": "铝板",
            "6": "铝塑板",
            "7": "水泥板",
            "8": "防腐木",
            "9": "其他"
        },
        "namezh": "表面材料"
    },
    "JZWBTZTJYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZTaiJie": {
        "type": "selectmultornull",
        "option": {
            "1": "粘土砖",
            "2": "饰面砂浆",
            "3": "石材",
            "4": "涂料",
            "5": "其他"
        },
        "comment": "表面材料",
        "namezh": "台阶"
    },
    "JZWBTZYouWuMen": {
        "type": "boolean",
        "namezh": "有无门"
    },
    "JZWBTZMCaiLiao": {
        "type": "select",
        "option": {
            "1": "木材",
            "2": "铝合金",
            "3": "塑钢",
            "4": "金属",
            "5": "其他"
        },
        "namezh": "材料",
        'judgeReference':'外进户门应设置在能够避免被冬季寒风直接吹到的位置，宜设在房屋的南侧。如果由于条件所限必须将入户门设置在北侧，可于北入口处加设门斗，形成室内和室外空间之间的缓冲空间，减少室内的热量散失。门窗采用密封性、保温隔热性能、隔音性能良好的型材和玻璃等材料。',
    },
    "JZWBTZMYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZCChuangChaoXiang": {
        "type": "selectmult",
        "option": {
            "1": "南向",
            "2": "北向",
            "3": "东西向"
        },
        "namezh": "窗朝向"
    },
    "JZWBTZCNXCaiLiao": {
        "type": "select",
        "option": {
            "1": "木材",
            "2": "铝合金",
            "3": "塑钢",
            "4": "其他"
        },
        "namezh": "材料",
        'judgeReference':'门窗采用密封性、保温隔热性能、隔音性能良好的型材和玻璃等材料。',
    },
    "JZWBTZCNXYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZCNXChuangQiangBi": {
        "type": "select",
        "option": {
            "1": "＜20%",
            "2": " 20%-40%",
            "3": " 40%-60%",
            "4": "＞60%"
        },
        "namezh": "窗墙比",
        'judgeReference':'居住建筑的窗墙比应符合《严寒和寒冷地区居住建筑节能设计标准》（JGJ26-2010）中的规定。公共建筑的窗墙比应符合《公共建筑节能设计标准》（GB50189-2005）中的规定，需要特别注意的是，当任何方向的窗墙比小于0.40时，玻璃或其他透明材料的可见光透射比不应小于0.40。\n严寒地区居住建筑窗墙比≤0.2\n严寒地区公共建筑窗墙比≤0.70',
    },
    "JZWBTZCNXYouWuBoLiMuQiang": {
        "type": "boolean",
        "namezh": "有无玻璃幕墙"
    },
    "JZWBTZCNXKeKaiQiBuFenBiLi": {
        "type": "select",
        "option": {
            "1": "＜5%",
            "2": "5-10%",
            "3": "＞10% "
        },
        "namezh": "可开启部分比例"
    },
    "JZWBTZCBXCaiLiao": {
        "type": "select",
        "option": {
            "1": "木材",
            "2": "铝合金",
            "3": "塑钢",
            "4": "其他"
        },
        "namezh": "材料",
        'judgeReference':'门窗采用密封性、保温隔热性能、隔音性能良好的型材和玻璃等材料。',
    },
    "JZWBTZCBXYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZCBXChuangQiangBi": {
        "type": "select",
        "option": {
            "1": "＜20%",
            "2": " 20%-40%",
            "3": " 40%-60%",
            "4": "＞60%"
        },
        "namezh": "窗墙比",
        'judgeReference':'居住建筑的窗墙比应符合《严寒和寒冷地区居住建筑节能设计标准》（JGJ26-2010）中的规定。公共建筑的窗墙比应符合《公共建筑节能设计标准》（GB50189-2005）中的规定，需要特别注意的是，当任何方向的窗墙比小于0.40时，玻璃或其他透明材料的可见光透射比不应小于0.40。\n严寒地区居住建筑窗墙比≤0.2\n严寒地区公共建筑窗墙比≤0.70',
    },
    "JZWBTZCBXYouWuBoLiMuQiang": {
        "type": "boolean",
        "namezh": "有无玻璃幕墙"
    },
    "JZWBTZCBXKeKaiQiBuFenBiLi": {
        "type": "select",
        "option": {
            "1": "＜5%",
            "2": "5-10%",
            "3": "＞10% "
        },
        "namezh": "可开启部分比例"
    },
    "JZWBTZCDXXCaiLiao": {
        "type": "select",
        "option": {
            "1": "木材",
            "2": "铝合金",
            "3": "塑钢",
            "4": "其他"
        },
        "namezh": "材料",
        'judgeReference':'门窗采用密封性、保温隔热性能、隔音性能良好的型材和玻璃等材料。',
    },
    "JZWBTZCDXXYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZCDXXChuangQiangBi": {
        "type": "select",
        "option": {
            "1": "＜20%",
            "2": " 20%-40%",
            "3": " 40%-60%",
            "4": "＞60%"
        },
        "namezh": "窗墙比",
        'judgeReference':'居住建筑的窗墙比应符合《严寒和寒冷地区居住建筑节能设计标准》（JGJ26-2010）中的规定。公共建筑的窗墙比应符合《公共建筑节能设计标准》（GB50189-2005）中的规定，需要特别注意的是，当任何方向的窗墙比小于0.40时，玻璃或其他透明材料的可见光透射比不应小于0.40。\n严寒地区居住建筑窗墙比≤0.2\n严寒地区公共建筑窗墙比≤0.70',
    },
    "JZWBTZCDXXYouWuBoLiMuQiang": {
        "type": "boolean",
        "namezh": "有无玻璃幕墙"
    },
    "JZWBTZCDXXKeKaiQiBuFenBiLi": {
        "type": "select",
        "option": {
            "1": "＜5%",
            "2": "5-10%",
            "3": "＞10% "
        },
        "namezh": "可开启部分比例"
    },
    "JZWBTZYouWuPaiBian": {
        "type": "boolean",
        "namezh": "有无牌匾"
    },
    "JZWBTZPBWeiZhi": {
        "type": "select",
        "option": {
            "1": "屋顶",
            "2": " 贴附于建筑物外墙面",
            "3": " 垂直于建筑物外墙",
            "4": " 利用建筑物外窗设置",
            "5": "其他"
        },
        "namezh": "位置"
    },
    "JZWBTZPBYanSe": {
        "type": "CCS",
        "namezh": "颜色"
    },
    "JZWBTZPBCaiZhi": {
        "type": "select",
        "option": {
            "1": "木材",
            "2": "塑料",
            "3": "彩钢板",
            "4": "LED",
            "5": "PVC板",
            "6": "喷绘布",
            "7": "其他"
        },
        "namezh": "材质"
    },
    "JZWBTZPBLiMianBiLiGuanXi": {
        "type": "select",
        "option": {
            "1": "＜10%",
            "2": " 10%-20%",
            "3": "20%-30%",
            "4": "30%-40%",
            "5": "＞40%"
        },
        "namezh": "立面比例关系"
    },
    "JZWBTZWuZhangAiSheJi": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "无障碍设计"
    },
    "JZSNHJSHJZaoSheng": {
        "type": "input",
        "comment": "数字dB",
        "namezh": "噪声",
        'judge':{
            '>50':1,
            '>45':2,
            '>40':3,
            '>35':4,
            'def':5,
        },
    },
    "JZSNHJSHJGSKaiKouBuWei": {
        "type": "select",
        "option": {
            "1": "一般可感到交通工具的噪声",
            "2": "一般感觉不到交通工具的噪声",
            "3": "感觉不到交通工具的噪声"
        },
        "namezh": "开口部位",
        'judge':{
            '1':1,
            '2':3,
            'def':5,
        },
        "judgeReference":'门窗采用密封性、保温隔热性能、隔音性能良好的型材和玻璃等材料。',

    },
    "JZSNHJSHJGSGeQiang": {
        "type": "select",
        "option": {
            "1": "感觉到有人的谈话声",
            "2": "感觉不到有人的谈话声",
            "3": "几乎听不到有人的谈话声"
        },
        "namezh": "隔墙",
        'judge':{
            '1':1,
            '2':3,
            'def':5,
        },
    },
    "JZSNHJSHJGSLouBanQingZhuangJiShengYuan": {
        "type": "select",
        "option": {
            "1": "椅子的移动声、物体掉落的声明显",
            "2": "能感觉到椅子的移动声、物体的掉落声",
            "3": "到椅子的移动声、物体的掉落声很小"
        },
        "namezh": "楼板（轻撞击声源）",
        'judge':{
            '1':1,
            '2':3,
            'def':5,
        },
    },
    "JZSNHJSHJGSLouBanQiangZhuangJiShengYuan": {
        "type": "select",
        "option": {
            "1": "能明显地感觉到欢闹与走动的声音",
            "2": "能听得见欢闹与走动的声音",
            "3": "听得见欢闹与走动的声音，但无明显干扰"
        },
        "namezh": "楼板（强撞击声源）",
        'judge':{
            '1':1,
            '2':3,
            'def':5,
        },
    },
    "JZSNHJSHJGSXiSheng": {
        "type": "select",
        "option": {
            "1": "未使用吸声材料",
            "2": "墙壁、楼板、顶棚等其中一处使用了吸声材料",
            "3": "墙壁、楼板、顶棚上均使用了吸声材料"
        },
        "namezh": "吸声",
        'judge':{
            '1':1,
            '2':3,
            'def':5,
        },
        "judgeReference":'合理选用建筑围护结构构件，采取有效的隔声、减噪措施，保证室内噪声级和隔声性能符合《民用建筑隔声设计规范》（GBJ118）的要求。<img class="img" src="/image/8.jpg">',

    },
    "JZSNHJRHJCNJiZhongGongNuan": {
        "type": "select",
        "option": {
            "1": "是",
            "2": "否"
        },
        "namezh": "集中供暖"
    },
    "JZSNHJRHJCNFangShi": {
        "type": "selectmult",
        "option": {
            "1": "火炕",
            "2": "火炉",
            "3": "土暖气",
            "4": "电暖气",
            "5": "火墙",
            "6": "热水供暖",
            "7": "空调",
            "8": "其他"
        },
        "namezh": "方式"
    },
    "JZSNHJRHJSWDongJiPingJunShiWen": {
        "type": "input",
        "comment": "数字℃",
        "namezh": "冬季平均室温",
        'judge':{
            '<18':1,
            '<20':3,
            'def':5,
        },
    },
    "JZSNHJRHJSWXiaJiPingJunShiWen": {
        "type": "input",
        "comment": "数字℃",
        "namezh": "夏季平均室温",
        'judge':{
            '>28':1,
            '>26':3,
            'def':5,
        },
    },
    "JZSNHJRHJWWHJGGRYBWXiaJiJiangWenCuoShi": {
        "type": "selectmultornull",
        "option": {
            "1": "往地面洒水",
            "2": "绿化遮阴",
            "3": "构筑物遮阴",
            "4": "建筑自遮挡",
            "5": "内遮阳",
            "6": "其他"
        },
        "namezh": "夏季降温措施",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
        "judgeReference":'东西向外墙可种植爬藤或乔木遮阳，采用隔热通风屋面或被动蒸发屋面，外窗宜设置遮阳措施。<img class="img" src="/image/28.jpg"><img class="img" src="/image/95.jpg">',
    },
    "JZSNHJRHJWWHJGGRYBWDongJiFangFengCuoShi": {
        "type": "selectmultornull",
        "option": {
            "1": "围墙挡风",
            "2": "植物挡风",
            "3": "构筑物挡风",
            "4": "建筑自设挡风构件",
            "5": "其他"
        },
        "namezh": "冬季防风措施",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
        "judgeReference":'<img class="img" src="/image/29.jpg">',

    },
    "JZSNHJRHJWWHJGGRYBWYouWuWaiQiangBaoWenGeRe": {
        "type": "boolean",
        "namezh": "有无外墙保温隔热"
    },
    "JZSNHJRHJWQBWGRLeiXing": {
        "type": "selectmultornull",
        "option": {
            "1": "外墙外保温",
            "2": "外墙内保温",
            "3": "自保温",
            "4": "其他"
        },
        "namezh": "类型",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
        "judgeReference":'采用附有保温层的外墙或自保温外墙。在墙体保温类型选择中，内保温技术由于具有对材料性能要求不高、便于施工和成本较低等特点，但内保温使内、外墙体分处于两个温度场，保温层易出现裂缝，结构寿命缩短，以及易产生热桥和不便于二次装修等缺陷。夹心保温墙体有效保护了保温材料，对保温材料要求不高，但为保证系统连接的安全性，须有连接件，构造复杂、施工困难；易产生热桥；内部易形成空气对流；外墙结构寿命短，不适合应用于村镇建筑。外保温技术由于能够避免“热桥”现象，保护主体结构和扩大室内空间等优点，被大多数村镇居民所接受，适宜应用于目前我国村镇建筑。<img class="img" src="/image/30.jpg">',
    },
    "JZSNHJRHJWQBWGRCaiLiao": {
        "type": "select",
        "option": {
            "1": "苯板",
            "2": "无机保温砂浆",
            "3": "草板",
            "4": "加气泡沫混凝土",
            "5": "隔热反射涂料",
            "6": "其他"
        },
        "namezh": "材料",
        'judgeReference':'a.在保温材料的选择上，建议经济条件较好的村镇选择EPS板、XPS板、PUR板等；建议经济条件一般的村镇选择EPS板；结合村镇自身周边资源条件，二者均可因地制宜地选择草板、草砖等生态材料作为墙体保温材料（见表4）。\nb.根据建筑物的实际特点，优选屋面或外墙的保温隔热材料系统和施工方式，例如保温板粘贴、保温板干挂、聚氨酯硬泡喷涂、保温浆料涂抹等，以保证保温隔热效果，并减少材料浪费。<img class="img" src="/image/31.jpg"><img class="img" src="/image/32.jpg"><img class="img" src="/image/33.jpg"><img class="img" src="/image/34.jpg"><img class="img" src="/image/35.jpg"><img class="img" src="/image/36.jpg"><img class="img" src="/image/37.jpg"><img class="img" src="/image/38.jpg"><img class="img" src="/image/39.jpg"><img class="img" src="/image/40.jpg"><img class="img" src="/image/41.jpg"><img class="img" src="/image/42.jpg"><img class="img" src="/image/43.jpg"><img class="img" src="/image/44.jpg"><img class="img" src="/image/45.jpg"><img class="img" src="/image/46.jpg"><img class="img" src="/image/47.jpg"><img class="img" src="/image/48.jpg"><img class="img" src="/image/49.jpg">',
    },
    "JZSNHJRHJWQBWGRHouDu": {
        "type": "select",
        "option": {
            "1": "＜20mm",
            "2": "20-40mm",
            "3": "41-60mm",
            "4": "61-80mm",
            "5": "81-100mm",
            "6": "＞100mm"
        },
        "namezh": "厚度"
    },
    "JZSNHJRHJYouWuWuDingBaoWenGeRe": {
        "type": "boolean",
        "namezh": "有无屋顶保温隔热"
    },
    "JZSNHJRHJWDBWGRLeiXing": {
        "type": "select",
        "option": {
            "1": "屋顶外保温",
            "2": "吊顶内保温",
            "3": "通风屋面",
            "4": "蓄水屋面",
            "5": "种植屋面",
            "6": "屋顶遮阳",
            "7": "其他"
        },
        "namezh": "类型",
        'judge':{
            "1": 5,
            "2": 5,
            "3": 5,
            "4": 5,
            "5": 5,
            "6": 5,
            "7": 5,
            'def':1,
        }
    },
    "JZSNHJRHJWDBWGRCaiLiao": {
        "type": "select",
        "option": {
            "1": "炉渣",
            "2": "苯板",
            "3": "珍珠岩",
            "4": "草板",
            "5": "农作物秸秆",
            "6": "稻壳、木屑",
            "7": "其他"
        },
        "namezh": "材料",
        'judgeReference':'a.保温材料方面，同时考虑保温性能与材料的本土性，经济较好的村镇可以主要选择聚苯板作为保温材料，一般村镇可以选择本土材料以相应的厚度充当保温材料（见表6）。\nb.根据建筑物的实际特点，优选屋面或外墙的保温隔热材料系统和施工方式，例如保温板粘贴、保温板干挂、聚氨酯硬泡喷涂、保温浆料涂抹等，以保证保温隔热效果，并减少材料浪费',
    },
    "JZSNHJRHJWDBWGRHouDu": {
        "type": "select",
        "option": {
            "1": "＜20mm",
            "2": "20-40mm",
            "3": "41-60mm",
            "4": "61-80mm",
            "5": "81-100mm",
            "6": "＞100mm"
        },
        "namezh": "厚度"
    },
    "JZSNHJRHJWaiChuangDongJiBaoWenCuoShi": {
        "type": "selectmultornull",
        "option": {
            "1": "糊窗缝",
            "2": "窗外加塑料膜",
            "3": "窗内加塑料膜",
            "4": "窗内加一层玻璃",
            "5": "其他"
        },
        "namezh": "外窗冬季保温措施",

        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
        "judgeReference":'a.门窗框与墙体间的缝隙，应采用高效保温材料填堵，宜采用施工现场灌注聚氨酯泡沫塑料或填塞聚乙烯泡沫塑料棒，再从内外侧用嵌缝密封膏（胶）密封，以减少该部位的开裂、结露和空气渗透。b.外墙保温层与门窗框之间的窗洞侧壁部位应做保温处理，保温材料与外墙保温材料一致，保温层厚度不小于20mm，以减弱该部位的热桥，提高门窗的保温性能。<img class="img" src="/image/63.jpg"><img class="img" src="/image/64.jpg"><img class="img" src="/image/65.jpg"><img class="img" src="/image/66.jpg"><img class="img" src="/image/67.jpg"><img class="img" src="/image/68.jpg"><img class="img" src="/image/90.jpg">',
    },
    "JZSNHJRHJWaiMenDongJiBaoWenCuoShi": {
        "type": "selectmultornull",
        "option": {
            "1": "挂棉门帘",
            "2": "外加门斗",
            "3": "附加阳光间",
            "4": "门外加塑料膜",
            "5": "其他"
        },
        "namezh": "外门冬季保温措施",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
        "judgeReference":'注重建筑的保温隔热性能。建筑出入口宜采用门斗、双层门、保温门帘等保温措施，设置朝南外廊时宜封闭形成阳光房，选用保温和密封性能好的门窗\na.外进户门应设置在能够避免被冬季寒风直接吹到的位置，宜设在房屋的南侧。如果由于条件所限必须将入户门设置在北侧，可于北入口处加设门斗，形成室内和室外空间之间的缓冲空间，减少室内的热量散失。\nb.建筑出入口宜采用门斗、双层门、保温门帘等保温措施',
    },
    "JZSNHJRHJYouWuDiMianBaoWenGeRe": {
        "type": "boolean",
        "namezh": "有无地面保温隔热",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },

    },
    "JZSNHJRHJDMBWGRCaiLiao": {
        "type": "select",
        "option": {
            "1": "炉渣",
            "2": "苯板",
            "3": "珍珠岩",
            "4": "加气泡沫混凝土",
            "5": "陶粒混凝土"
        },
        "namezh": "材料",
        'judgeReference':'<img class="img" src="/image/69.jpg"><img class="img" src="/image/70.jpg"><img class="img" src="/image/71.jpg"><img class="img" src="/image/72.jpg"><img class="img" src="/image/73.jpg"><img class="img" src="/image/74.jpg">',
    },
    "JZSNHJRHJDMBWGRHouDu": {
        "type": "select",
        "option": {
            "1": "＜20mm",
            "2": "20-40mm",
            "3": "41-60mm",
            "4": "61-80mm",
            "5": "81-100mm",
            "6": "＞100mm"
        },
        "namezh": "厚度"
    },
    "JZSNHJRHJSheJiKaoLv": {
        "type": "select",
        "option": {
            "1": " 设计中未充分考虑降低经窗户、外墙、屋顶、楼板和外廊进入室内的热量，遮阳和隔热效果差",
            "2": " 设计中考虑了降低经窗户、外墙、屋顶、楼板和外廊进入室内的热量，在遮阳和隔热方面不存在问题",
            "3": " 充分考虑降低经窗户、外墙、屋顶、楼板和外廊进入室内的热量，具有良好的遮阳和隔热效果"
        },
        "namezh": "设计考虑",
        'judge':{
            '1':1,
            '2':3,
            '3':5,
        },

    },
    "JZSNHJRHJSDJiaShiGongNen": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "加湿功能"
    },
    "JZSNHJRHJSDShiNaShiDu": {
        "type": "input",
        "comment": "数字%",
        "namezh": "室内湿度",
        'judgeReference':'保持室内具有良好的湿热环境，防止因外围护结构内表面温度过高过低、透过玻璃进入室内的太阳辐射热等引起的不舒适感；设置室内温度和湿度调控系统，使室内的热舒适度能得到有效的调控，建筑物内的加湿和除湿系统能得到有效调节；根据使用要求合理设计温度可调区域的大小，满足不同个体对热舒适性的要求。\n保持室内适宜的温湿度，防治潮湿和有害生物滋生。应尽量使用被动技术改善保温隔热通风性能，避免使用复杂设备。\n设置室内温度和湿度调控系统，使室内的热舒适度能得到有效的调控，建筑物内的加湿和除湿系统能得到有效调节。',

    },
    "JZSNHJGHJZRGLYCeMianCaiGuangXiShu": {
        "type": "input",
        "comment": "数字%",
        "namezh": "侧面采光系数",
        'judge':{
            '<1':1,
            '<2':2,
            '<3':3,
            '<4':4,
            'def':5,
        }
    },
    "JZSNHJGHJZRGLYCeMianCaiGuangZhaoDu": {
        "type": "input",
        "comment": "数字lx",
        "namezh": "侧面采光照度",
        'judge':{
            '<150':1,
            '<300':2,
            '<450':3,
            '<600':4,
            'def':5,
        },
        'judgeReference':'<img class="img" src="/image/9.jpg">',

    },
    "JZSNHJGHJZRGLYDingBuCaiGuangXiShu": {
        "type": "input",
        "comment": "数字%",
        "namezh": "顶部采光系数",
        'judge':{
            '<0.5':1,
            '<1':2,
            '<2':3,
            '<3':4,
            'def':5,
        }
    },
    "JZSNHJGHJZRGLYDingBuCaiGuangZhaoDu": {
        "type": "input",
        "comment": "数字lx",
        "namezh": "顶部采光照度",
        'judge':{
            '<75':1,
            '<150':2,
            '<300':3,
            '<450':4,
            'def':5,
        }
    },
    "JZSNHJGHJZRGLYCaiGuangSheBei": {
        "type": "select",
        "option": {
            "1": "无采光设备",
            "2": " 有一种采光设备",
            "3": " 有两种以上的采光设备，且具有高性能"
        },
        "namezh": "采光设备",
        'judge':{
            '1':1,
            '2':3,
            '3':5,
        },
        'judgeReference':'设计采光性能最佳的建筑朝向，发挥天井、庭院、中庭的采光作用，使天然光线能照亮人员经常停留的室内空间；采用自然光调控设施，如采用反光板、反光镜、集光装置等，改善室内的自然光分布；充足的天然采光和自然通风有利于居住者的生理和心理健康，同时也有利于降低人工照明能耗。各种光源的视觉试验结果表明，在同样照度的条件下，天然光的辨认能力优于人工光，从而有利于人们工作、生活、保护视力和提高劳动生产率。居住建筑功能房间包括卧室、起居室（厅）、书房、厨房和卫生间。对于公共建筑，非功能空间包括走廊、核心筒、卫生间、电梯间、特殊功能房间，其余的为功能房间。室内照明尽量利用自然光，如不具备自然采光条件，可利用光导纤维引导照明，以充分利用阳光，减少白天对人工照明的依赖；天然采光不仅有利于照明节能，而且有利于增加室内外的自然信息交流，改善空间卫生环境，调节空间使用者的心情。建筑的地下空间和高大进深的地上空间，由于物理的封闭，很容易出现天然采光不足的情况。通过反光板、棱镜玻璃窗、天窗、下沉庭院等设计手法的采用，以及导光管等技术的采用，可以有效改善这些空间的天然采光效果。<img class="img" src="/image/10.jpg">',
    },
    "JZSNHJGHJXuanGuangDuiCe": {
        "type": "select",
        "option": {
            "1": "无炫光对策",
            "2": "用窗帘进行控制",
            "3": " 靠窗檐、窗帘进行控制"
        },
        "namezh": "眩光对策",
        'judge':{
            '1':3,
            '2':5,
            '3':0,
        },
        'judgeReference':'<img class="img" src="/image/11.jpg"><img class="img" src="/image/12.jpg"><img class="img" src="/image/13.jpg"><img class="img" src="/image/14.jpg"><img class="img" src="/image/15.jpg">',
    },
    "JZSNHJGHJZhaoMingKongZhi": {
        "type": "select",
        "option": {
            "1": "无法进行照明控制",
            "2": " 粗略的照明控制",
            "3": " 精细的照明控制"
        },
        "namezh": "照明控制",
        'judge':{
            '1':1,
            '2':3,
            '3':5,
        },
        'judgeReference':'照明系统采用分区控制、场景设置等技术措施，有效避免过度使用和浪费；分级设计一般照明和局部照明，满足低标准的一般照明与符合工作面照度要求的局部照明相结合；局部照明可调节，以有利使用者的健康和照明节能；采用高效、节能的光源、灯具和电器附件。',
    },
    // "JZSNHJSNKQPZZRTFXNChuangHuShiFuKeKaiBi": {
    //     "type": "select",
    //     "option": {
    //         "1": "是",
    //         "2": "否"
    //     },
    //     "namezh": "窗户是否可开闭",
    //     'judgeReference':'合理组织室内气流，防止炊事油烟排放造成的室内空气污染和中毒。\n窗按照开启方式分类有有推拉窗、平开窗、固定窗、悬窗、转窗等。窗的开启方式选择常常跟当地的气候特点密切相关。平开窗开启方式简单，安装维修都较为便捷，通风面积在开启几种方式中最大。关闭平开窗时，橡胶密封条受挤压所产生的形变可以使窗紧密封闭，隔音、隔热、保温性能都较好，适宜在严寒地区推广。<img class="img" src="/image/75.jpg"><img class="img" src="/image/76.jpg">',
    // },
    // "JZSNHJSNKQPZZRTFXNYouXiaoZiRanTongFengDeKaiKouMianJi": {
    //     "type": "input",
    //     "comment": "数字cm2/m2",
    //     "namezh": "有效自然通风的开口面积",
    //     'judge':{
    //         '<=0':1,
    //         '<50':3,
    //         '<100':5,
    //     },

    // },
    // "JZSNHJSNKQPZYXGLCO2DeJianCe": {
    //     "type": "select",
    //     "option": {
    //         "1": "无监测",
    //         "2": " 采用手工测量的系统",
    //         "3": " 采用空气品质实时中央检测系统"
    //     },
    //     "namezh": "CO2的监测",
    //     'judge':{
    //         '1':1,
    //         '2':3,
    //         '3':5,
    //     },
    //     'judgeReference':'对室内的要求二氧化碳浓度监控，即应设置与排风联动的二氧化碳检测装置，当传感器监测到室内CO2浓度超过1000μg/g，进行报警，同时自动启动排风系统。',
    // },
    // "JZSNHJSNKQPZYXGLXiYanKongZhi": {
    //     "type": "select",
    //     "option": {
    //         "1": "无控制",
    //         "2": "设置吸烟室，采取了防止非吸烟者被动吸烟的最低限度措施",
    //         "3": "全楼禁烟，或设置吸烟室、很好的采取了防止非吸烟者被动吸烟的措施"
    //     },
    //     "namezh": "吸烟控制",
    //     'judge':{
    //         '1':1,
    //         '2':3,
    //         '3':5,
    //     },
    //     'judgeReference':'设集中空调的建筑，宜设置室内空气质量监测系统，维护用户的健康和舒适；采取有效措施防止结露和滋生霉菌。主要功能房间中人员密度较高且随时间变化大的区域设置室内空气质量监控系统，保证健康舒适的室内环境。人员密度较高且随时间变化大的区域指设计人员密度超过0.25人/平方米，设计总人数超过8人，且人员随时间变化大的区域。二氧化碳检测技术比较成熟、使用方便，但甲醛、氨、苯、VOC等空气污染物的浓度监测比较复杂，使用不方便，有些简便方法不成熟，受环境条件变化影响大。如上所述，除二氧化碳要求检测进、排风设备的工作状态，并与室内空气污染监测系统关联，实现自动通风调节。甲醛、颗粒物等其他污染物要求可以超标实时报警。对室内的要求二氧化碳浓度监控，即应设置与排风联动的二氧化碳检测装置，当传感器监测到室内CO2浓度超过1000μg/g，进行报警，同时自动启动排风系统。对于危害人体健康的游离甲醛、苯、氨、氡和TVOC五类空气污染物，应符合现行国家标准《室内空气质量标准》GB/T 18883中的有关规定（见表7）。'
    // },
    "JZSNHJSNKQPZQiLiuZuZhi": {
        "type"  : "selectmultornull",
        'option':{
            '1' :'重要功能区域供暖、通风的气流组织满足热环境参数设计要求',
            '2' :'避免卫生间、餐厅等区域的空气和污染物串通到其他空间或室外活动场所',
        },
        "namezh": "气流组织",
        'judge':{
            '0':0,
            '1':3,
            '2':5,
        },
        'judgeReference':'设集中空调的建筑，宜设置室内空气质量监测系统，维护用户的健康和舒适；采取有效措施防止结露和滋生霉菌。主要功能房间中人员密度较高且随时间变化大的区域设置室内空气质量监控系统，保证健康舒适的室内环境。人员密度较高且随时间变化大的区域指设计人员密度超过0.25人/平方米，设计总人数超过8人，且人员随时间变化大的区域。二氧化碳检测技术比较成熟、使用方便，但甲醛、氨、苯、VOC等空气污染物的浓度监测比较复杂，使用不方便，有些简便方法不成熟，受环境条件变化影响大。如上所述，除二氧化碳要求检测进、排风设备的工作状态，并与室内空气污染监测系统关联，实现自动通风调节。甲醛、颗粒物等其他污染物要求可以超标实时报警。对室内的要求二氧化碳浓度监控，即应设置与排风联动的二氧化碳检测装置，当传感器监测到室内CO2浓度超过1000μg/g，进行报警，同时自动启动排风系统。对于危害人体健康的游离甲醛、苯、氨、氡和TVOC五类空气污染物，应符合现行国家标准《室内空气质量标准》GB/T 18883中的有关规定（见表7）。'
    },
    "NYLYGNRLLXDian": {
        "type": "input",
        "comment": "°",
        "namezh": "电"
    },
    "NYLYGNRLLXMei": {
        "type": "input",
        "comment": "t",
        "namezh": "煤"
    },
    "NYLYGNRLLXMuChai": {
        "type": "input",
        "comment": "t",
        "namezh": "木柴"
    },
    "NYLYGNRLLXJieGan": {
        "type": "input",
        "comment": "t",
        "namezh": "秸秆"
    },
    "NYLYGNRLLXQiTa": {
        "type": "input",
        "comment": "",
        "namezh": "其他"
    },
    // "NYLYGNGLRXLRanMeiYanMei": {
    //     "type": "input",
    //     "comment": "数字%（有集中供暖时填写）",
    //     "namezh": "燃煤、烟煤",
    //     'judge':{
    //         '<3':1,
    //         'def':5,
    //     }
    // },
    // "NYLYGNGLRXLRanYouRanQi": {
    //     "type": "input",
    //     "comment": "数字%（有集中供暖时填写）",
    //     "namezh": "燃油、燃气",
    //     'judge':{
    //         '<2':1,
    //         'def':5,
    //     }
    // },
    "NYLYKZSNYDYXLYKeZaiShengNenYuanDeZhiJieLiYong": {
        "type": "selectmultornull",
        "option": {
            "1": "采光利用：方案设计中包括利用自然光取代照明设备的自然采光系统。例如：反光板、天窗、侧高窗等、",
            "2": "通风利用：方案设计中包括有效的自然通风系统。例如：自动风门、夜间通风、中庭通风、太阳烟囱、通风塔等、",
            "3": "地热利用：方案设计中包括可替代冷热源和空调设备、减小空调负荷的地热利用系统。例如：地下埋管、地道等、",
            "4": "其他：规划有其他有效的直接利用可再生能源的系统。"
        },
        "namezh": "可再生能源的直接利用",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
    },
    "NYLYKZSNYDYXLYKeZaiShengNenYuanDeZhuanHuanLiYong": {
        "type": "selectmultornull",
        "option": {
            "1": "太阳光利用：方案设计中考虑了采用太阳能发电替代部分电力设备。例如：太阳能光电池板等",
            "2": "太阳能热利用：方案设计中考虑了有效利用太阳能以降低冷热源设备的能耗。例如：太阳能集热板、太阳能真空管热水器",
            "3": "废热利用：方案设计中考虑了废热利用以提高冷热源设备的效率。例如：井水水源热泵、河水水源热泵等",
            "4": "其他：规划有其他有效的转换利用可再生能源的系统。"
        },
        "namezh": "可再生能源的转换利用",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
        'judgeReference':'<img class="img" src="/image/79.jpg"><img class="img" src="/image/80.jpg"><img class="img" src="/image/81.jpg"><img class="img" src="/image/82.jpg"><img class="img" src="/image/83.jpg"><img class="img" src="/image/87.jpg"><img class="img" src="/image/89.jpg">',
    },
    "NYLYTaiYangNenReShuiXiTong": {
        "type": "selectmultornull",
        "option": {
            "1": "选用紧凑式直接加热自然循环的太阳能热水系统",
            "2": "利用太阳能供热供暖时，设置其他能源辅助加热设备",
            "3": "辅助热源与供暖或炊事系统相结合",
            "4": "选用分离式或间接式太阳能热水系统时，管路设计应为最短，并采取保温措施"
        },
        "namezh": "太阳能热水系统",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
        'judgeReference':'严寒地区普遍日照充足，为太阳能的应用提供了便利的条件，被动式太阳房是将太阳能用于采暖的最简单、最有效的一种形式。被动太阳房无须任何设备，经济成本较低，尤其在部分严寒地区冬季太阳能也较为丰富，只要建筑围护结构进行一定的保温节能改造，被动太阳房完全可以达到室内热环境所要求的基本标准。太阳能低温储水采暖系统也是适合严寒地区村镇的采暖系统之一。<img class="img" src="/image/84.jpg">',
    },
    "NYLYYouWuShengWuZhiNenYuanLiYong": {
        "type": "boolean",
        "namezh": "有无生物质能源利用"
    },
    "NYLYSWZNYLYZQLYNenYuanXiaoLvQiHuaLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "能源效率（气化率）",
        'judge':{
            '<=70':1,
            'def':5
        },
        'judgeReference':'生物质能是农村普遍采用的节能方法，在严寒地区春季、夏季、秋季可以作为补充能源，达到节约煤炭、减少污染的目的。生物质能作为其他可再生能源的补充，有效地解决了人居地域内排泄物的处理和再利用问题，形成建筑可持续发展过程，符合保护人类生态环境的要求。在严寒地区生物质能科学技术发展和家用生物质能推广的背景下，根据当地使用要求和气温、地质等的条件，家用沼气池有固定拱盖的水压式池、大揭盖水压式池、吊管式水压式池、曲流布料水压式等多种形式。',
    },
    "NYLYSWZNYLYZQLYZaoJuReXiaoLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "灶具热效率",
        'judge':{
            '<=55':1,
            'def':5
        }

    },
    "NYLYSWZNYLYZQLYKaiGuanFaKongKongJing": {
        "type": "input",
        "comment": "数字mm",
        "namezh": "开关阀控孔径",
        'judge':{
            '<5':1,
            'def':5
        }

    },
    "NYLYSWZNYLYZQLYDongJiFaJiaoWenDu": {
        "type": "input",
        "comment": "数字℃",
        "namezh": "冬季发酵温度",
        'judge':{
            '<=8':1,
            'def':5
        }

    },
    "NYLYSWZNYLYZQLYGuiMoHuaZhaoQiGongChengCaiYongJiaReFangShiWeiChiS": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "规模化沼气工程采用加热方式维持所需热量进行保温",
        'judge':{
            '1':3,
            '2':5,
            'def':0,
        }

    },
    // "NYLYSWZNYLYZQLYDiYuanReBengXiTong": {
    //     "type": "inputornull",
    //     "comment": "冬季地埋管换热器进口水温,数字℃",
    //     "namezh": "地源热泵系统",
    //     'judge':{
    //         '<=4':1,
    //         'def':5
    //     }

    // },
    "ZYYCLLYSZYBHJieShui": {
        "type": "select",
        "option": {
            "1": "无节水计划",
            "2": "在主要阀门处安装节水装置",
            "3": "除安装节水装置外，还采用了节水型设备（如声控冲水系统、节水厕所等）"
        },
        "namezh": "节水",
        'judge':{
            '1':1,
            '2':3,
            'def':5
        },
        'judgeReference':'节水管理制度主要包括节水方案、分户分类计量收费、节水管理机制等。\n采取有效措施避免管网漏损，选用密闭性能好的阀门、设备，使用耐腐蚀、耐久性能好的管材、管件，室外埋地管道采取有效措施避免管网漏损，设计阶段根据水平衡测试的要求安装分级计量水表；运行阶段提供用水量计量情况和管网漏损检测、整改的报告。给水系统无超压出流现象用水点供水压力不大于0.20MPa，且不小于用水器具要求的最低工作压力。按使用用途，对厨房、卫生间、绿化、空调系统、游泳池、景观等用水分别设置用水计量装置，统计用水量，或者按付费或管理单元分别设置用水计量装置统计用水量。\n建筑平均日用水量满足现行国家标准《民用建筑节水设计标准》GB 50555中的节水用水定额的要求。\na.采取有效措施避免管网漏损，选用密闭性能好的阀门、设备，使用耐腐蚀、耐久性能好的管材、管件，室外埋地管道采取有效措施避免管网漏损，设计阶段根据水平衡测试的要求安装分级计量水表；\nb.所有用水器具应满足现行标准《节水型生活用水器具》CJ164及《节水型产品技术条件与管理通则》GB/T18870的要求。 除特殊功能需求外，均应采用节水型用水器具。\n可选用以下节水器具：\n1）  节水龙头：加气节水龙头、陶瓷阀芯水龙头、停水自动关闭水龙头等；\n2）  坐便器：压力流防臭、压力流冲击式6L直排便器、3L/6L两挡节水型虹吸式排水坐便器、6L以下直排式节水型坐便器或感应式节水型坐便器，缺水地区可选用带洗手水龙头的水箱坐便器，对于农村户厕要为无害化卫生厕所，采用节水型高压水冲装置，并满足《农村改厕技术规范（试行）》和《农村户厕卫生标准》GB 19379的相关要求；\n3）  节水淋浴器：水温调节器、节水型淋浴喷嘴等；\n营业性公共浴室淋浴器采用恒温混合阀、脚踏开关等。<img class="img" src="/image/94.jpg">'
    },
    "ZYYCLLYSZYBHYSLYYuShuiLiYongXiTong": {
        "type": "select",
        "option": {
            "1": "无雨水利用措施",
            "2": "有雨水利用措施，雨水利用率在20%以上"
        },
        "namezh": "雨水利用系统",
        'judge':{
            '1':1,
            '2':5,
            'def':0
        },
        'judgeReference':'对雨雪水、再生水等水资源利用的技术经济可行性进行分析和研究，进行水量平衡计算，确定雨雪水、再生水等水资源的利用方法、规模、处理工艺流程等。在水资源短缺地区，通过技术经济比较，合理采用雨水和中水回用系统；合理规划地表与屋顶雨水径流途径，最大程度降低地表径流，采用多种渗透措施增加雨水的渗透量。\n景观水体补水严禁采用市政供水和自备地下水井供水，可以采用地表水和非传统水源，取用建筑场地外的地表水时，应事先取得当地政府主管部门的许可；采用雨水和建筑中水作为水源时，水景规模应根据设计可收集利用的雨水或中水量来确定。<img class="img" src="/image/85.jpg"><img class="img" src="/image/88.jpg">'
    },
    // "ZYYCLLYSZYBHYSLYWSZLYZaPaiShuiZaiLiYongXiTong": {
    //     "type": "select",
    //     "option": {
    //         "1": "无杂排水再利用措施",
    //         "2": "有杂排水再利用措施",
    //         "3": "有杂排水利用及污水再利用设备和措施"
    //     },
    //     "namezh": "杂排水再利用系统",
    //     'judge':{
    //         '1':1,
    //         '2':3,
    //         '3':5,
    //         'def':0
    //     },

    // },
    "ZYYCLLYSZYBHGuanGai": {
        "type": "selectmultornull",
        "option": {
            "1": "采用节水灌溉系统",
            "2": "设置土壤湿度感应器、雨天关闭装置等节水控制措施",
            "3": "灌溉用水采用河水、收集雨水",
            "4": "灌溉采用微喷灌、滴灌、渗灌等高效节水灌溉方式",
            "5": "种植无需永久灌溉植物"
        },
        "namezh": "灌溉",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5
        },
    },
    "ZYYCLLYSYDHJFHCLZiYuanDeZaiLiYongLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "资源的再利用率",
        'judge':{
            '<15':1,
            '<20':2,
            '<25':3,
            '<30':4,
            'def':5,
        }
    },
    // "ZYYCLLYSYDHJFHCLKeChiXuSenLinCaiFaDeMuCaiLvSeMuCaiShiYongLv": {
    //     "type": "input",
    //     "comment": "数字%",
    //     "namezh": "可持续森林采伐的木材（绿色木材）使用率",
    //     'judge':{
    //         '==0':1,
    //         '<10':3,
    //         '<50':4,
    //         'def':5,
    //     },
    // },
    "ZYYCLLYSYDHJFHCLDuiJianKangWuHaiDeCaiLiaoShiYong": {
        "type": "select",
        "option": {
            "1": "1种",
            "2": "2种",
            "3": "3种",
            "4": "4种及以上",
            "5": "无"
        },
        "namezh": "对健康无害的材料使用",
        'judge':{
            '5':1,
            '1':2,
            '2':3,
            '3':4,
            '4':5,
        },
    },
    "ZYYCLLYSYDHJFHCLDuiJiYouJianZhuZhuTiDeZaiLiYong": {
        "type": "select",
        "option": {
            "1": "不进行再利用",
            "2": "对部分建筑框架进行再利用",
            "3": "对全部建筑框架进行再利用"
        },
        "namezh": "对既有建筑主体的再利用",
        'judge':{
            '1':1,
            '2':3,
            '3':5,
        },
    },
    "ZYYCLLYSYDHJFHCLJiuCaiLiaoZaiLiYongLiang": {
        "type": "input",
        "comment": "（建筑主体材料的再利用率）数字%",
        "namezh": "旧材料再利用量",
        'judge':{
            '<50':1,
            '<60':2,
            '<70':3,
            '<80':4,
            'def':5,
        },
        'judgeReference':'a.公共建筑设计中考虑可变换功能的室内空间采用可重复使用的隔断（墙）。多地采用可重复使用的灵活隔墙，或采用无隔墙只有矮隔断的大开间敞开式空间，可减少室内空间重新布置时对建筑构件的破坏，节约材料，同时为使用期间构配件的替换和将来建筑拆除后构配件的再利用创造条件。',
    },
    "SGGLHJBHCaiQuSaShuiFuGaiZheDangDengJiangChenCuoShi": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "采取洒水、覆盖、遮挡等降尘措施",
        'judge':{
            '2':1,
            '1':5,
        },
        'judgeReference':'施工中应采取降尘措施，降低大气总悬浮颗粒物浓度。施工中的降尘措施包括对易飞扬物质的洒水、覆盖、遮挡，对出入车辆的清洗、封闭，对易产生扬尘施工工艺的降尘措施等。在工地建筑结构脚手架外侧设置密目防尘网或防尘布，具有很好的扬尘控制效果。运送土方、垃圾、设备及建筑材料等，不污损场外道路。运输容易散落、飞扬、流漏的物料的车辆，必须采取措施封闭严密，保证车辆清洁。施工现场出口应设置洗车槽。土方作业阶段，采取洒水、覆盖等措施，达到作业区目测扬尘高度小于1.5m，不扩散到场区外。在场界四周隔档高度位置测得的大气总悬浮颗粒物（TSP）月平均浓度与村镇背景值的差值不大于0.08mg/m3。',
    },
    "SGGLHJBHCaiQuYouXiaoDeJiangZaoCuoShiZaiShiGongChangJieCeLiangBin": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "采取有效的降噪措施。在施工场界测量并记录噪声，满足现行国家标准《建筑施工场界环境噪声排放标准》GB 12523的规定",
        'judge':{
            '2':1,
            '1':5,
        },
        'judgeReference':'在施工场地对噪音进行实时监测与控制。监测方法执行国家标准《建筑施工场界噪声测量方法》（GB12524-90）。为了减低施工噪声排放，应该采取降低噪声和噪声传播的有效措施，包括采用低噪声设备，运用吸声、消声、隔声、隔振等降噪措施，降低施工机械噪声。',
    },
    "SGGLHJBHKeHuiShouShiGongFeiQiWuDeHuiShouLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "可回收施工废弃物的回收率",
        'judge':{
            '<80':1,
            'def':5,
        },
    },
    "SGGLHJBHMei10000m2JianZhuMianJiDeShiGongGuTiFeiQiWuPaiFangLiangS": {
        "type": "input",
        "comment": "数字t",
        "namezh": "每10000m2建筑面积的施工固体废弃物排放量SWC",
        'judge':{
            '>350':1,
            '>300':3,
            'def':5,
        },
        'judgeReference':'制定建筑垃圾减量化计划，同时加强建筑垃圾的回收再利用，力争建筑垃圾的再利用和回收率达到30%，建筑物拆除产生的废弃物的再利用和回收率大于40%。对于碎石类、土石方类建筑垃圾，可采用地基填埋、铺路等方式提高再利用率，力争再利用率大于50%。施工现场生活区设置封闭式垃圾容器，施工场地生活垃圾实行袋装化，及时清运。对建筑垃圾进行分类，并收集到现场封闭式垃圾站，集中运出。\n临时设施充分利用旧料和现场拆迁回收材料，使用装配方便、可循环利用的材料；周转材料、循环使用材料和机具应耐用、维护与拆卸方便、且易于回收和再利用；采用工业化的成品，减少现场作业与废料；减少建筑垃圾，充分利用废弃物。建筑垃圾处理符合国家《建筑垃圾处理技术规范》(CJJ134-2009)中的相关要求。\n（1）通过合理布置，减少施工对场地及场地周边环境的扰动和破坏；设置专门场地堆置弃土，土方尽量原地回填利用，并采取防止土壤流失的措施；采取保护表层土壤、稳定斜坡、植被覆盖等措施；使用淤泥栅栏、沉淀池等措施控制沉淀物。同时，保护当地生态环境，维持地方文脉与传统文化。\n对深基坑施工方案进行优化，减少土方开挖和回填量，最大限度地减少对土地的扰动，保护周边自然生态环境。红线外临时占地应尽量使用荒地、废地，少占用农田和耕地。工程完工后，及时对红线外占地恢复原地形、地貌，使施工活动对周边环境的影响降至最低。利用和保护施工用地范围内原有绿色植被。对于施工周期较长的现场，可按建筑永久绿化的要求，安排场地新建绿化。\n施工废弃物分类处理，且符合国家及地方法律法规的要求；避免或减少排放污染物对土壤的污染，如：仓库、油库、化粪池、垃圾站等处应采取防漏防渗措施，防止危险品、化学品、污染物、固体废物中有害物质的泄漏；施工结束后应恢复施工活动中被破坏的植被（一般指临时占地内）补偿施工活动中人为破坏植被和地貌造成的土壤侵蚀等损失。\n（2）临时设施包括临时加工厂、现场作业棚及材料堆场、办公生活设施等。临时设施的占地面积应按用地指标所需的最低面积设计。要求平面布置合理、紧凑，在满足环境、职业健康与安全及文明施工要求的前提下尽可能减少废弃地和死角，临时设施占地面积有效利用率大于90%。',

    },
    "SGGLZYJYShiGongNenHaoJianCe": {
        "type": "selectmultornull",
        "option": {
            "1": "制定并实施施工节能和用能方案",
            "2": "监测并记录施工区、生活区的能耗",
            // "3": "监测并记录主要建筑材料、设备从供货商提供的货源地到施工现场运输的能耗",
            // "4": "监测并记录建筑施工废弃物从施工现场到废弃物处理/回收中心运输的能耗\t\t\t"
        },
        "namezh": "施工能耗检测",
        'judge':{
            '0':0,
            '1':3,
            '2':5,
            // '3':4,
            // 'def':5,
        },
        'judgeReference':'通过改善能源使用结构，有效地控制施工过程中的能耗；根据具体情况合理组织施工、积极推广节能新技术、新工艺。施工过程中的用能，是建筑全寿命期能耗的组成部分。由于建筑结构、高度、所在地区等的不同，建成每平方米建筑的用能量有显著的差异。施工中应制定节能和用能方案，提出建成每平方米建筑能耗目标值，预算各施工阶段用电负荷，合理配置临时用电设备，尽量避免多台大型设备同时使用。合理安排工序，提高各种机械的使用率和满载率，降低各种设备的单位耗能。做好建筑施工能耗管理，包括现场耗能与运输耗能。为此应该做好能耗监测、记录，用于指导施工过程中的能源节约。竣工时提供施工过程能耗记录和建成每平方米建筑实际能耗值，为施工过程的能耗统计提供基础数据。记录主要建筑材料运输耗能，是指有记录的建筑材料占所有建筑材料重量的85%以上。制定合理施工能耗指标，提高施工能源利用率；确保施工设备满负荷运转，减少无用功，禁止不合格临时设施用电，以免造成损失。',
    },
    "SGGLZYJYShiGongYongShuiJianCe": {
        "type": "selectmultornull",
        "option": {
            "1": "制定并实施施工节水和用水方案",
            "2": "监测并记录施工区、生活区的水耗数据",
            // "3": "监测并记录基坑降水的抽取量、排放量和利用量数据、\t\t\t"
        },
        "namezh": "施工用水检测",
        'judge':{
            '0':0,
            '1':3,
            '2':5,
            // 'def':5,
        },
        'judgeReference':'（1）施工过程中的用水，是建筑全寿命期水耗的组成部分。由于建筑结构、高度、所在地区等的不同，建成每平方米建筑的用水量有显著的差异。施工中应制定节水和用水方案，提出建成每平方米建筑水耗目标值。为此应该做好水耗监测、记录，用于指导施工过程中的节水。竣工时提供施工过程水耗记录和建成每平方米建筑实际水耗值，为施工过程的水耗统计提供基础数据。\n基坑降水抽取的地下水量大，要合理设计基坑开挖，减少基坑水排放。配备地下水存储设备，合理利用抽取的基坑水。记录基坑降水的抽取量、排放量和利用量数据。对于洗刷、降尘、绿化、设备冷却等用水来源，应尽量采用非传统水源。具体包括工程项目中使用的中水、基坑降水、工程使用后收集的沉淀水以及雨水等。\n采用施工节水工艺、节水设备和设施；加强节水管理，施工用水进行定额计量。施工现场供水管网应根据用水量设计布置，管径合理、管路简捷，采取有效措施减少管网和用水器具的漏损。现场机具、设备、车辆冲洗用水必须设立循环用水装置。施工现场办公区、生活区的生活用水采用节水系统和节水器具，提高节水器具配置比率。项目临时用水应使用节水型产品，安装计量装置，采取针对性的节水措施。对混凝土搅拌站点等用水集中的区域和工艺点进行专项计量考核。施工现场建立雨水、中水或可再利用水的搜集利用系统。\n（2）优先采用中水搅拌、中水养护，有条件的地区和工程应收集雨水养护；处于基坑降水阶段的工地，宜优先采用地下水作为混凝土搅拌用水、养护用水、冲洗用水和部分生活用水；现场机具、设备、车辆冲洗、喷洒路面、绿化浇灌等用水，优先采用非传统水源，尽量不使用市政自来水；大型施工现场，尤其是雨量充沛地区的大型施工现场建立雨水收集利用系统，充分收集自然降水用于施工和生活中适宜的部位；力争施工中非传统水源和循环水的再利用量大于30%。\n',

    },
    "SGGLZYJYYuBanHunNingTuDeSunHaoJiangDiLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "预拌混凝土的损耗降低率",
        'judge':{
            '>1.5':1,
            '>1':3,
            'def':5,
        },
        'judgeReference':'预拌混凝土和砂浆的使用应准确计算采购数量、供应频率、施工速度等，在施工过程中动态控制。结构工程使用散装水泥。推广使用高强钢筋和高性能混凝土，减少资源消耗。',
    },
    "SGGLZYJYZhuanYeHuaShengChanDeChengXingGangJinShiYongLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "专业化生产的成型钢筋使用率",
        'judge':{
            '<80':1,
            'def':5,
        },
        'judgeReference':'推广钢筋专业化加工和配送。优化钢筋配料和钢构件下料方案。钢筋及钢结构制作前应对下料单及样品进行复核，无误后方可批量下料。优化钢结构制作和安装方法。大型钢结构宜采用工厂制作，现场拼装；宜采用分段吊装、整体提升、滑移、顶升等安装方法，减少方案的措施用材量。',
    },
    "SGGLZYJYXianChangJiaGongGangJinSunHaoLvLRsb": {
        "type": "input",
        "comment": "数字%",
        "namezh": "现场加工钢筋损耗率LRsb",
        'judge':{
            '>3':1,
            '>1.5':3,
            'def':5,
        },
    },
    "SGGLZYJYGongJuShiDingXingMoBanShiYongMianJiZhanMoBanGongChengZon": {
        "type": "input",
        "comment": "数字%",
        "namezh": "工具式定型模板使用面积占模板工程总面积的比例Rsf",
        'judge':{
            '<50':1,
            '<65':3,
            'def':5,
        },
    },
    "SGGLGCGLCanJianGeFangJinXingLvSeJianZhuZhongDianNaRongDeZhuanXia": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "参建各方进行绿色建筑重点内容的专项会审",
        'judge':{
            '2':1,
            '1':5,
        }
    },
    "SGGLGCGLShiGongGuoChengZhongYiShiGongRiZhiJiLuLvSeJianZhuZhongDi": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "施工过程中以施工日志记录绿色建筑重点内容的实施情况",
        'judge':{
            '2':1,
            '1':5,
        }
    },
    "SGGLGCGLYanGeKongZhiSheJiWenJianBianGengBiMianChuXianJiangDiJian": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "严格控制设计文件变更，避免出现降低建筑绿色性能的重大变更",
        'judge':{
            '2':1,
            '1':5,
            'def':0,
        }
    },
    "SGGLGCGLJianZhuDeNaiJiuXingJianCe": {
        "type": "selectmultornull",
        "option": {
            "1": "对保证建筑结构耐久性的技术措施进行相应检测并记录",
            "2": "对有节能、环保要求的设备进行相应检测并记录",
            "3": "对有节能、环保要求的装修装饰材料进行相应检测并记录\t\t\t"
        },
        "namezh": "建筑的耐久性检测",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
    },
    "SGGLGCGLTuJianZhuangXiuYiTiHuaShiGong": {
        "type": "selectmultornull",
        "option": {
            "1": "孔洞预留和装修面层固定件的预埋",
            "2": "工程竣工时主要功能空间的使用功能完备，装修到位",
            "3": "提供装修材料检测报告、机电设备检测报告、性能复试报告",
            "4": "提供建筑竣工验收证明、建筑质量保修书、使用说明书",
            "5": "提供业主反馈意见书\t\t\t"
        },
        "namezh": "土建装修一体化施工",
        'judge':{
            '0':1,
            '1':2,
            '2':3,
            '3':4,
            'def':5,
        },
    },
    // "SGGLGCGLGongChengJunGongYanShouQianYouJianSheDanWeiZuZhiYouGuanZ": {
    //     "type": "select",
    //     "option": {
    //         "1": "有",
    //         "2": "无"
    //     },
    //     "namezh": "工程竣工验收前，由建设单位组织有关责任单位，进行机电系统的综合调试和联合试运转，结果符合设计要求",
    //      'judge':{
    //         '2':1,
    //         '1':5,
    //         'def':0,
    //     }
    // },
    "SGGLGCGLDongQiShiGongGuoChengZhongCaiQuHeLiJiShuCuoShi": {
        "type": "selectmultornull",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "冬期施工过程中采取合理技术措施",
         'judge':{
            '0':1,
            '1':3,
            '2':4,
            '3':5,
            'def':0,
        }
    },
    // "YXGLGLZDGuanLiTiXiRenZheng": {
    //     "type": "selectmultornull",
    //     "option": {
    //         "1": "具有ISO 14001环境管理体系认证",
    //         "2": "具有ISO 9001质量管理体系认证",
    //         "3": "具有现行国家标准《能源管理体系要求》GB/T 23331的能源管理体系认证"
    //     },
    //     "namezh": "管理体系认证",
    //     'judge':{
    //         '0':1,
    //         '1':3,
    //         '2':4,
    //         'def':5,
    //     },
    //     'judgeReference':'管理单位通过IS0 14001环境管理体系认证，是提高环境管理水平的需要，可达到节约能源，降低消耗，减少环保支出，降低成本的目的，减少由于污染事故或违反法律、法规所造成的环境风险。管理具有完善的管理措施，定期进行管理人员的培训。ISO 9001质量管理体系认证可以促进管理单位质量管理体系的改进和完善，提高其管理水平和工作质量。《能源管理体系要求》GB/T 23331是在组织内建立起完整有效的、形成文件的能源管理体系，注重过程的控制，优化组织的活动、过程及其要素，通过管理措施，不断提高能源管理体系持续改进的有效性，实现能源管理方针和预期的能源消耗或使用目标。',
    // },
    "YXGLGLZDCaoZuoGuiCheng": {
        "type": "selectmultornull",
        "option": {
            "1": "节能、节水、节材、绿化等相关设施的操作规程在现场明示，操作人员严格遵守规定",
            "2": "节能、节水设施运行具有完善的应急预案"
        },
        "namezh": "操作规程",
        'judge':{
            '0':1,
            '1':3,
            'def':5,
        },
    },
    "YXGLGLZDNenYuanZiYuanGuanLiJiLiJiZhi": {
        "type": "selectmultornull",
        "option": {
            "1": "物业管理机构的工作考核体系中包含能源资源管理激励机制",
            "2": "与租用者的合同中包含节能条款",
            "3": "采用合同能源管理模式"
        },
        "namezh": "能源资源管理激励机制",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
    },
    "YXGLGLZDLvSeJiaoYuXuanChuanJiZhi": {
        "type": "selectmultornull",
        "option": {
            "1": "有绿色教育宣传工作记录",
            "2": "向使用者提供绿色设施使用手册",
            "3": "相关绿色行为与成效获得公共媒体报道"
        },
        "namezh": "绿色教育宣传机制",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
    },
    "YXGLGLZDShiGongPingJia": {
        "type": "input",
        "comment": "数字",
        "namezh": "施工评价",
        'judge':{
            '<24':1,
            '<31.5':3,
            '<40':5,
            'def':0,
        },
    },
    "YXGLJSGLGongGongSheShiSheBeiJianChaDiaoShi": {
        "type": "selectmultornull",
        "option": {
            "1": "具有设施设备的检查、调试、运行、标定记录，且记录完整",
            "2": "制定并实施设备能效改进等方案"
        },
        "namezh": "公共设施设备检查、调试",
        'judge':{
            '0':1,
            '1':3,
            'def':5,
        },
    },
    // "YXGLJSGLKongDiaoTongFengXiTongJianChaHeQingXi": {
    //     "type": "selectmultornull",
    //     "option": {
    //         "1": "制定空调通风设备和风管的检查和清洗计划",
    //         "2": "实施选项1中的检查和清洗计划，且记录保存完整"
    //     },
    //     "namezh": "空调通风系统检查和清洗",
    //     'judge':{
    //         '0':1,
    //         '1':3,
    //         'def':5,
    //     },
    // },
    // "YXGLJSGLFeiChuanTongShuiYuanDeShuiZhiHeYongShuiLiangJiLu": {
    //     "type": "selectmultornull",
    //     "option": {
    //         "1": "定期进行水质检测，记录完整、准确",
    //         "2": "用水量记录完整、准确"
    //     },
    //     "namezh": "非传统水源的水质和用水量记录",
    //     'judge':{
    //         '0':1,
    //         '1':3,
    //         'def':5,
    //     },
    // },
    // "YXGLJSGLZhiNenHuaXiTongDeYunXingXiaoGuo": {
    //     "type": "selectmultornull",
    //     "option": {
    //         "1": "居住建筑的智能化系统满足现行行业标准《居住区智能化系统配置与技术要求》CJ/T 174的基本配置要求，公共建筑的智能化系统满足现行国家标准《智能建筑设计标准》GB 50314的基础配置要求",
    //         "2": "智能化系统工作正常，符合设计要求"
    //     },
    //     "namezh": "智能化系统的运行效果",
    //     'judge':{
    //         '0':1,
    //         '1':3,
    //         'def':5,
    //     },
    // },
    // "YXGLJSGLXinXiHuaWuYeGuanLi": {
    //     "type": "selectmultornull",
    //     "option": {
    //         "1": "设置物业信息管理系统",
    //         "2": "物业管理信息系统功能完备",
    //         "3": "记录数据完整"
    //     },
    //     "namezh": "信息化物业管理",
    //     'judge':{
    //         '0':1,
    //         '1':3,
    //         '2':4,
    //         'def':5,
    //     },

    // },
    "YXGLHJGLWuGongHaiBingChongHaiFangZhiJiShu": {
        "type": "selectmultornull",
        "option": {
            "1": "建立和实施化学药品管理责任制",
            "2": "病虫害防治用品使用记录完整",
            "3": "采用生物制剂、仿生制剂等无公害防治技术"
        },
        "namezh": "无公害病虫害防治技术",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
    },
    "YXGLHJGLZaiZhongHeYiZhiDeShuMuYiCiChengHuoLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "栽种和移植的树木一次成活率",
        'judge':{
            '<90':3,
            '>=90':5,
            'def':1,
        },
    },
    "YXGLHJGLLaJiShouJiZhanDianJiLaJiJianWeiHu": {
        "type": "selectmultornull",
        "option": {
            "1": "垃圾站(间)定期冲洗",
            "2": "垃圾及时清运、处置",
            "3": "周边无臭味，用户反映良好"
        },
        "namezh": "垃圾收集站（点）及垃圾间维护",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
    },
    "YXGLHJGLLaJiFenLeiShouJiHeChuLi": {
        "type": "selectmultornull",
        "option": {
            "1": "垃圾分类收集率达到90％",
            "2": "可回收垃圾的回收比例达到90%",
            "3": "对可生物降解垃圾进行单独收集和合理处置",
            "4": "对有害垃圾进行单独收集和合理处置"
        },
        "namezh": "垃圾分类收集和处理",
        'judge':{
            '0':1,
            '1':2,
            '2':3,
            '3':4,
            'def':5,
        },
        'judgeReference':'根据垃圾的来源、可否回用、处理要求等确立分类管理制度和必要的收集设施，并对垃圾的收集、运输等进行整体的合理规划，如果设置小型有机厨余垃圾处理设施，应考虑其合理性。其次，制定包括垃圾管理运行操作手册、管理设施、管理经费、人员配备及机构分工、监督机制、定期的岗位业务培训和突发事件的应急处理系统等内容的垃圾管理制度。最后，垃圾容器应具有密闭性能，其规格和位置应符合国家有关标准的规定，其数量、外观色彩及标志应符合垃圾分类收集的要求，并置于隐蔽、避风处，与周围景观相协调，坚固耐用，不易倾倒，防止垃圾无序倾倒和二次污染。相关污染物的排放应符合现行标准《大气污染物综合排放标准》GB16297、《锅炉大气污染物排放标准》GB13271、《饮食业油烟排放标准》GB18483、《污水综合排放标准》GB8978、《医疗机构水污染物排放标准》GB18466、《污水排入城镇下水道水质标准》CJ343、《社会生活环境噪声排放标准》GB22337、《制冷空调设备和系统 减少卤代制冷剂排放规范》GB/T26205等的规定。',
    },
    "YXGLHJGLKeZaiShengNenYuanXiTongLiYongSheBeiWeiHu": {
        "type": "selectmultornull",
        "option": {
            "1": "记录齐全",
            "2": "维护维修及时，正常使用",
            "3": "利用时间记录齐全、数据完备"
        },
        "namezh": "可再生能源系统利用设备维护",
        'judge':{
            '0':1,
            '1':3,
            '2':4,
            'def':5,
        },
    }
}