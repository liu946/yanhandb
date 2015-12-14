/**
 * Created by liu on 15/11/18.
 */

models.export = {
    "JZJBXXBianHao": {
        "type": "input",
        "comment": "字母+数字（对建筑编号后分别录入下列内容）",
        "namezh": "编号"
    },
    "JZJBXXMingChen": {
        "type": "input",
        "comment": "文字（居住建筑为户主姓名、公共建筑为建筑名称）",
        "namezh": "名称"
    },
    "JZJBXXJianZhuXingZhi": {
        "type": "select",
        "option": {
            "1": "居住建筑",
            "2": "公共建筑"
        },
        "namezh": "建筑性质"
    },
    "JZJBXXZongJianZhuMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "总建筑面积",

    },
    "JZJBXXJianZhuJiDiMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "建筑基底面积"
    },
    "JZJBXXDiXiaKongJianMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "地下空间面积"
    },
    "JZJBXXTingYuanMianJi": {
        "type": "input",
        "comment": "m^2",
        "namezh": "庭院面积"
    },
    "JZJBXXChaoXiang": {
        "type": "select",
        "option": {
            "1": "南北向",
            "2": "东西向",
            "3": "东北向",
            "4": "东南向"
        },
        "namezh": "朝向"
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
        "namezh": "结构形式"
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
        "namezh": "层数"
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
        "namezh": "高度"
    },
    "JZJBXXJianZhuFengGe": {
        "type": "select",
        "option": {
            "1": "现代",
            "2": "欧式",
            "3": "中式",
            "4": "其他"
        },
        "namezh": "建筑风格"
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
        "namezh": "建造年代"
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
        "namezh": "材料"
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
        "namezh": "高度"
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
        "namezh": "层数"
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
        "namezh": "材料"
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
        "namezh": "形式"
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
        "namezh": "屋脊装饰构件"
    },
    "JZWBTZWDWuDingLvHua": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "屋顶绿化"
    },
    "JZWBTZWDTaiYangNenWuDing": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "太阳能屋顶"
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
        "namezh": "材料"
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
        "namezh": "外墙装饰材料"
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
        "namezh": "构件"
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
        "namezh": "材料"
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
        "namezh": "材料"
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
        "namezh": "窗墙比"
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
        "namezh": "材料"
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
        "namezh": "窗墙比"
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
        "namezh": "材料"
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
        "namezh": "窗墙比"
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
        "judgeReference":'合理选用建筑围护结构构件，采取有效的隔声、减噪措施，保证室内噪声级和隔声性能符合《民用建筑隔声设计规范》（GBJ118）的要求。图8',

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
        "judgeReference":'东西向外墙可种植爬藤或乔木遮阳，采用隔热通风屋面或被动蒸发屋面，外窗宜设置遮阳措施。图28、95',
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
        "judgeReference":'图29',

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
        "judgeReference":'采用附有保温层的外墙或自保温外墙。在墙体保温类型选择中，内保温技术由于具有对材料性能要求不高、便于施工和成本较低等特点，但内保温使内、外墙体分处于两个温度场，保温层易出现裂缝，结构寿命缩短，以及易产生热桥和不便于二次装修等缺陷。夹心保温墙体有效保护了保温材料，对保温材料要求不高，但为保证系统连接的安全性，须有连接件，构造复杂、施工困难；易产生热桥；内部易形成空气对流；外墙结构寿命短，不适合应用于村镇建筑。外保温技术由于能够避免“热桥”现象，保护主体结构和扩大室内空间等优点，被大多数村镇居民所接受，适宜应用于目前我国村镇建筑。图30',
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
        "namezh": "材料"
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
        judge:{
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
        "namezh": "材料"
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
        "judgeReference":'a.门窗框与墙体间的缝隙，应采用高效保温材料填堵，宜采用施工现场灌注聚氨酯泡沫塑料或填塞聚乙烯泡沫塑料棒，再从内外侧用嵌缝密封膏（胶）密封，以减少该部位的开裂、结露和空气渗透。b.外墙保温层与门窗框之间的窗洞侧壁部位应做保温处理，保温材料与外墙保温材料一致，保温层厚度不小于20mm，以减弱该部位的热桥，提高门窗的保温性能。图63-68、90',
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
        "namezh": "设计考虑"
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
        "namezh": "室内湿度"
    },
    "JZSNHJGHJZRGLYCeMianCaiGuangXiShu": {
        "type": "input",
        "comment": "数字%",
        "namezh": "侧面采光系数"
    },
    "JZSNHJGHJZRGLYCeMianCaiGuangZhaoDu": {
        "type": "input",
        "comment": "数字lx",
        "namezh": "侧面采光照度"
    },
    "JZSNHJGHJZRGLYDingBuCaiGuangXiShu": {
        "type": "input",
        "comment": "数字%",
        "namezh": "顶部采光系数"
    },
    "JZSNHJGHJZRGLYDingBuCaiGuangZhaoDu": {
        "type": "input",
        "comment": "数字lx",
        "namezh": "顶部采光照度"
    },
    "JZSNHJGHJZRGLYCaiGuangSheBei": {
        "type": "select",
        "option": {
            "1": "无采光设备",
            "2": " 有一种采光设备",
            "3": " 有两种以上的采光设备，且具有高性能"
        },
        "namezh": "采光设备"
    },
    "JZSNHJGHJXuanGuangDuiCe": {
        "type": "select",
        "option": {
            "1": "无炫光对策",
            "2": "用窗帘进行控制",
            "3": " 靠窗檐、窗帘进行控制"
        },
        "namezh": "眩光对策"
    },
    "JZSNHJGHJZhaoMingKongZhi": {
        "type": "select",
        "option": {
            "1": "无法进行照明控制",
            "2": " 粗略的照明控制",
            "3": " 精细的照明控制"
        },
        "namezh": "照明控制"
    },
    "JZSNHJSNKQPZZRTFXNChuangHuShiFuKeKaiBi": {
        "type": "select",
        "option": {
            "1": "是",
            "2": "否"
        },
        "namezh": "窗户是否可开闭"
    },
    "JZSNHJSNKQPZZRTFXNYouXiaoZiRanTongFengDeKaiKouMianJi": {
        "type": "input",
        "comment": "数字m 2",
        "namezh": "有效自然通风的开口面积"
    },
    "JZSNHJSNKQPZYXGLCO2DeJianCe": {
        "type": "select",
        "option": {
            "1": "无监测",
            "2": " 采用手工测量的系统",
            "3": " 采用空气品质实时中央检测系统"
        },
        "namezh": "CO2的监测"
    },
    "JZSNHJSNKQPZYXGLXiYanKongZhi": {
        "type": "select",
        "option": {
            "1": "无控制",
            "2": "设置吸烟室，采取了防止非吸烟者被动吸烟的最低限度措施",
            "3": "全楼禁烟，或设置吸烟室、很好的采取了防止非吸烟者被动吸烟的措施"
        },
        "namezh": "吸烟控制"
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
    "NYLYGNGLRXLRanMeiYanMei": {
        "type": "input",
        "comment": "数字%（有集中供暖时填写）",
        "namezh": "燃煤、烟煤"
    },
    "NYLYGNGLRXLRanYouRanQi": {
        "type": "input",
        "comment": "数字%（有集中供暖时填写）",
        "namezh": "燃油、燃气"
    },
    "NYLYKZSNYDYXLYKeZaiShengNenYuanDeZhiJieLiYong": {
        "type": "selectmultornull",
        "option": {
            "1": "采光利用：方案设计中包括利用自然光取代照明设备的自然采光系统。例如：反光板、天窗、侧高窗等、",
            "2": "通风利用：方案设计中包括有效的自然通风系统。例如：自动风门、夜间通风、中庭通风、太阳烟囱、通风塔等、",
            "3": "地热利用：方案设计中包括可替代冷热源和空调设备、减小空调负荷的地热利用系统。例如：地下埋管、地道等、",
            "4": "其他：规划有其他有效的直接利用可再生能源的系统。"
        },
        "namezh": "可再生能源的直接利用"
    },
    "NYLYKZSNYDYXLYKeZaiShengNenYuanDeZhuanHuanLiYong": {
        "type": "selectmultornull",
        "option": {
            "1": "太阳光利用：方案设计中考虑了采用太阳能发电替代部分电力设备。例如：太阳能光电池板等",
            "2": "太阳能热利用：方案设计中考虑了有效利用太阳能以降低冷热源设备的能耗。例如：太阳能集热板、太阳能真空管热水器",
            "3": "废热利用：方案设计中考虑了废热利用以提高冷热源设备的效率。例如：井水水源热泵、河水水源热泵等",
            "4": "其他：规划有其他有效的转换利用可再生能源的系统。"
        },
        "namezh": "可再生能源的转换利用"
    },
    "NYLYTaiYangNenReShuiXiTong": {
        "type": "selectmultornull",
        "option": {
            "1": "选用紧凑式直接加热自然循环的太阳能热水系统",
            "2": "利用太阳能供热供暖时，设置其他能源辅助加热设备",
            "3": "辅助热源与供暖或炊事系统相结合",
            "4": "选用分离式或间接式太阳能热水系统时，管路设计应为最短，并采取保温措施"
        },
        "namezh": "太阳能热水系统"
    },
    "NYLYYouWuShengWuZhiNenYuanLiYong": {
        "type": "boolean",
        "namezh": "有无生物质能源利用"
    },
    "NYLYSWZNYLYZQLYNenYuanXiaoLvQiHuaLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "能源效率（气化率）"
    },
    "NYLYSWZNYLYZQLYZaoJuReXiaoLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "灶具热效率"
    },
    "NYLYSWZNYLYZQLYKaiGuanFaKongKongJing": {
        "type": "input",
        "comment": "数字mm",
        "namezh": "开关阀控孔径"
    },
    "NYLYSWZNYLYZQLYDongJiFaJiaoWenDu": {
        "type": "input",
        "comment": "数字℃",
        "namezh": "冬季发酵温度"
    },
    "NYLYSWZNYLYZQLYGuiMoHuaZhaoQiGongChengCaiYongJiaReFangShiWeiChiS": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "规模化沼气工程采用加热方式维持所需热量进行保温"
    },
    "NYLYSWZNYLYZQLYDiYuanReBengXiTong": {
        "type": "inputornull",
        "comment": "冬季地埋管换热器进口水温,数字℃",
        "namezh": "地源热泵系统"
    },
    "ZYYCLLYSZYBHJieShui": {
        "type": "select",
        "option": {
            "1": "无节水计划",
            "2": "在主要阀门处安装节水装置",
            "3": "除安装节水装置外，还采用了节水型设备（如声控冲水系统、节水厕所等）"
        },
        "namezh": "节水"
    },
    "ZYYCLLYSZYBHYSLYWSZLYYuShuiLiYongXiTong": {
        "type": "select",
        "option": {
            "1": "无雨水利用措施",
            "2": "有雨水利用措施，雨水利用率在20%以上"
        },
        "namezh": "雨水利用系统"
    },
    "ZYYCLLYSZYBHYSLYWSZLYZaPaiShuiZaiLiYongXiTong": {
        "type": "select",
        "option": {
            "1": "无杂排水再利用措施",
            "2": "有杂排水再利用措施",
            "3": "有杂排水利用及污水再利用设备和措施"
        },
        "namezh": "杂排水再利用系统"
    },
    "ZYYCLLYSZYBHGuanGai": {
        "type": "selectmultornull",
        "option": {
            "1": "采用节水灌溉系统",
            "2": "设置土壤湿度感应器、雨天关闭装置等节水控制措施",
            "3": "灌溉用水采用河水、收集雨水",
            "4": "灌溉采用微喷灌、滴灌、渗灌等高效节水灌溉方式",
            "5": "种植无需永久灌溉植物"
        },
        "namezh": "灌溉"
    },
    "ZYYCLLYSYDHJFHCLZiYuanDeZaiLiYongLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "资源的再利用率"
    },
    "ZYYCLLYSYDHJFHCLKeChiXuSenLinCaiFaDeMuCaiLvSeMuCaiShiYongLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "可持续森林采伐的木材（绿色木材）使用率"
    },
    "ZYYCLLYSYDHJFHCLDuiJianKangWuHaiDeCaiLiaoShiYong": {
        "type": "select",
        "option": {
            "1": "1种",
            "2": "2种",
            "3": "3种",
            "4": "4种及以上",
            "5": "无"
        },
        "namezh": "对健康无害的材料使用"
    },
    "ZYYCLLYSYDHJFHCLDuiJiYouJianZhuZhuTiDeZaiLiYong": {
        "type": "select",
        "option": {
            "1": "不进行再利用",
            "2": "对部分建筑框架进行再利用",
            "3": "对全部建筑框架进行再利用"
        },
        "namezh": "对既有建筑主体的再利用"
    },
    "ZYYCLLYSYDHJFHCLJiuCaiLiaoZaiLiYongLiang": {
        "type": "input",
        "comment": "（建筑主体材料的再利用率）数字%",
        "namezh": "旧材料再利用量"
    },
    "SGGLHJBHCaiQuSaShuiFuGaiZheDangDengJiangChenCuoShi": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "采取洒水、覆盖、遮挡等降尘措施"
    },
    "SGGLHJBHCaiQuYouXiaoDeJiangZaoCuoShiZaiShiGongChangJieCeLiangBin": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "采取有效的降噪措施。在施工场界测量并记录噪声，满足现行国家标准《建筑施工场界环境噪声排放标准》GB 12523的规定"
    },
    "SGGLHJBHKeHuiShouShiGongFeiQiWuDeHuiShouLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "可回收施工废弃物的回收率"
    },
    "SGGLHJBHMei10000m2JianZhuMianJiDeShiGongGuTiFeiQiWuPaiFangLiangS": {
        "type": "input",
        "comment": "数字t",
        "namezh": "每10000m2建筑面积的施工固体废弃物排放量SWC"
    },
    "SGGLZYJYShiGongNenHaoJianCe": {
        "type": "selectmultornull",
        "option": {
            "1": "制定并实施施工节能和用能方案",
            "2": "监测并记录施工区、生活区的能耗",
            "3": "监测并记录主要建筑材料、设备从供货商提供的货源地到施工现场运输的能耗",
            "4": "监测并记录建筑施工废弃物从施工现场到废弃物处理/回收中心运输的能耗\t\t\t"
        },
        "namezh": "施工能耗检测"
    },
    "SGGLZYJYShiGongYongShuiJianCe": {
        "type": "selectmultornull",
        "option": {
            "1": "制定并实施施工节水和用水方案",
            "2": "监测并记录施工区、生活区的水耗数据",
            "3": "监测并记录基坑降水的抽取量、排放量和利用量数据、\t\t\t"
        },
        "namezh": "施工用水检测"
    },
    "SGGLZYJYYuBanHunNingTuDeSunHaoJiangDiLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "预拌混凝土的损耗降低率"
    },
    "SGGLZYJYZhuanYeHuaShengChanDeChengXingGangJinShiYongLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "专业化生产的成型钢筋使用率"
    },
    "SGGLZYJYXianChangJiaGongGangJinSunHaoLvLRsb": {
        "type": "input",
        "comment": "数字%",
        "namezh": "现场加工钢筋损耗率LRsb"
    },
    "SGGLZYJYGongJuShiDingXingMoBanShiYongMianJiZhanMoBanGongChengZon": {
        "type": "input",
        "comment": "数字%",
        "namezh": "工具式定型模板使用面积占模板工程总面积的比例Rsf"
    },
    "SGGLGCGLCanJianGeFangJinXingLvSeJianZhuZhongDianNaRongDeZhuanXia": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "参建各方进行绿色建筑重点内容的专项会审"
    },
    "SGGLGCGLShiGongGuoChengZhongYiShiGongRiZhiJiLuLvSeJianZhuZhongDi": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "施工过程中以施工日志记录绿色建筑重点内容的实施情况"
    },
    "SGGLGCGLYanGeKongZhiSheJiWenJianBianGengBiMianChuXianJiangDiJian": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "严格控制设计文件变更，避免出现降低建筑绿色性能的重大变更"
    },
    "SGGLGCGLJianZhuDeNaiJiuXingJianCe": {
        "type": "selectmultornull",
        "option": {
            "1": "对保证建筑结构耐久性的技术措施进行相应检测并记录",
            "2": "对有节能、环保要求的设备进行相应检测并记录",
            "3": "对有节能、环保要求的装修装饰材料进行相应检测并记录\t\t\t"
        },
        "namezh": "建筑的耐久性检测"
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
        "namezh": "土建装修一体化施工"
    },
    "SGGLGCGLGongChengJunGongYanShouQianYouJianSheDanWeiZuZhiYouGuanZ": {
        "type": "select",
        "option": {
            "1": "有",
            "2": "无"
        },
        "namezh": "工程竣工验收前，由建设单位组织有关责任单位，进行机电系统的综合调试和联合试运转，结果符合设计要求"
    },
    "YXGLGLZDGuanLiTiXiRenZheng": {
        "type": "selectmultornull",
        "option": {
            "1": "具有ISO 14001环境管理体系认证",
            "2": "具有ISO 9001质量管理体系认证",
            "3": "具有现行国家标准《能源管理体系要求》GB/T 23331的能源管理体系认证"
        },
        "namezh": "管理体系认证"
    },
    "YXGLGLZDCaoZuoGuiCheng": {
        "type": "selectmultornull",
        "option": {
            "1": "节能、节水、节材、绿化等相关设施的操作规程在现场明示，操作人员严格遵守规定",
            "2": "节能、节水设施运行具有完善的应急预案"
        },
        "namezh": "操作规程"
    },
    "YXGLGLZDNenYuanZiYuanGuanLiJiLiJiZhi": {
        "type": "selectmultornull",
        "option": {
            "1": "物业管理机构的工作考核体系中包含能源资源管理激励机制",
            "2": "与租用者的合同中包含节能条款",
            "3": "采用合同能源管理模式"
        },
        "namezh": "能源资源管理激励机制"
    },
    "YXGLGLZDLvSeJiaoYuXuanChuanJiZhi": {
        "type": "selectmultornull",
        "option": {
            "1": "有绿色教育宣传工作记录",
            "2": "向使用者提供绿色设施使用手册",
            "3": "相关绿色行为与成效获得公共媒体报道"
        },
        "namezh": "绿色教育宣传机制"
    },
    "YXGLGLZDShiGongPingJia": {
        "type": "input",
        "comment": "数字",
        "namezh": "施工评价"
    },
    "YXGLJSGLGongGongSheShiSheBeiJianChaDiaoShi": {
        "type": "selectmultornull",
        "option": {
            "1": "具有设施设备的检查、调试、运行、标定记录，且记录完整",
            "2": "制定并实施设备能效改进等方案"
        },
        "namezh": "公共设施设备检查、调试"
    },
    "YXGLJSGLKongDiaoTongFengXiTongJianChaHeQingXi": {
        "type": "selectmultornull",
        "option": {
            "1": "制定空调通风设备和风管的检查和清洗计划",
            "2": "实施选项1中的检查和清洗计划，且记录保存完整"
        },
        "namezh": "空调通风系统检查和清洗"
    },
    "YXGLJSGLFeiChuanTongShuiYuanDeShuiZhiHeYongShuiLiangJiLu": {
        "type": "selectmultornull",
        "option": {
            "1": "定期进行水质检测，记录完整、准确",
            "2": "用水量记录完整、准确"
        },
        "namezh": "非传统水源的水质和用水量记录"
    },
    "YXGLJSGLZhiNenHuaXiTongDeYunXingXiaoGuo": {
        "type": "selectmultornull",
        "option": {
            "1": "居住建筑的智能化系统满足现行行业标准《居住区智能化系统配置与技术要求》CJ/T 174的基本配置要求，公共建筑的智能化系统满足现行国家标准《智能建筑设计标准》GB 50314的基础配置要求",
            "2": "智能化系统工作正常，符合设计要求"
        },
        "namezh": "智能化系统的运行效果"
    },
    "YXGLJSGLXinXiHuaWuYeGuanLi": {
        "type": "selectmultornull",
        "option": {
            "1": "设置物业信息管理系统",
            "2": "物业管理信息系统功能完备",
            "3": "记录数据完整"
        },
        "namezh": "信息化物业管理"
    },
    "YXGLHJGLWuGongHaiBingChongHaiFangZhiJiShu": {
        "type": "selectmultornull",
        "option": {
            "1": "建立和实施化学药品管理责任制",
            "2": "病虫害防治用品使用记录完整",
            "3": "采用生物制剂、仿生制剂等无公害防治技术"
        },
        "namezh": "无公害病虫害防治技术"
    },
    "YXGLHJGLZaiZhongHeYiZhiDeShuMuYiCiChengHuoLv": {
        "type": "input",
        "comment": "数字%",
        "namezh": "栽种和移植的树木一次成活率"
    },
    "YXGLHJGLLaJiShouJiZhanDianJiLaJiJianWeiHu": {
        "type": "selectmultornull",
        "option": {
            "1": "垃圾站(间)定期冲洗",
            "2": "垃圾及时清运、处置",
            "3": "周边无臭味，用户反映良好"
        },
        "namezh": "垃圾收集站（点）及垃圾间维护"
    },
    "YXGLHJGLLaJiFenLeiShouJiHeChuLi": {
        "type": "selectmultornull",
        "option": {
            "1": "垃圾分类收集率达到90％",
            "2": "可回收垃圾的回收比例达到90%",
            "3": "对可生物降解垃圾进行单独收集和合理处置",
            "4": "对有害垃圾进行单独收集和合理处置"
        },
        "namezh": "垃圾分类收集和处理"
    },
    "YXGLHJGLKeZaiShengNenYuanXiTongLiYongSheBeiWeiHu": {
        "type": "selectmultornull",
        "option": {
            "1": "记录齐全",
            "2": "维护维修及时，正常使用",
            "3": "利用时间记录齐全、数据完备"
        },
        "namezh": "可再生能源系统利用设备维护"
    }
}