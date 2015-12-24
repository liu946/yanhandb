/**
 * Created by liu on 15/12/6.
 */


module.exports = {
  "CZJBXXSuoShuZhenYu": {
    "type": "input",
    "defaultValue": "null",
    "namezh": "所属镇域"
  },
  "CZJBXXCunZhenMingChen": {
    "type": "input",
    "defaultValue": "null",
    "namezh": "村镇名称"
  },
  "CZJBXXRenJunJiZhuYongDiMianJi": {
    "type": "input",
    "defaultValue": "0",
    "size": ".1",
    "comment": "m^2",
    "namezh": "人均居住用地",
    'judgeReference':'引导宅基地紧缩，降低人均居住用地面积。<img class="img" src="/image/1.jpg">',

  },
  "CZJBXXJianZhuBuJuMoShi": {
    "type": "selectmult",
    "defaultValue": "null",
    "option": {
      "1": "布局规整、顺应地势",
      "2": "结合场地自然条件，对建筑的体形、朝向和楼距等进行优化设计"
    },
    "namezh": "建筑布局模式",
    "judge":{
      '0':1,
      '1':3,
      '2':5,
    },
    "judgeReference":'村镇用地布局与形态应充分保护和利用原有自然及人文资源条件，优化居民点布局；注重建筑风格及其功能符合当地生活方式和气候条件，并与周边自然环境及既有建筑相协调，保护村镇民族特色与文化风格。\n（1）充分利用建筑场地周边的自然条件，尽量保留和合理利用现有适宜的地形、地貌、植被和自然水系；\n（2）在建筑的选址、朝向、布局、形态等方面，充分考虑当地气候特征和生态环境，尤其是严寒地区村镇特有的冬季寒冷夏季炎热的气候特征；严寒地区村镇的建筑设计应充分考虑周边自然山水和既有建筑的体量和尺度，过大或者过高的建筑体量往往会与小城镇的自然环境和既有建筑形成明显反差。建筑的体量和尺度应有所控制，建筑形式宜错落有致，从而与周边自然环境和既有建筑相协调。山区农房宜充分利用地形起伏，采取灵活布局，形成错落有致的山地村庄景观。滨水农房宜充分利用河流、坑塘、水渠等水面，沿岸线布局，形成独特的滨水村庄景观。',

  },
  "ZRHJShuiTiMianJi": {
    "type": "input",
    "defaultValue": "0",
    "size": ".1",
    "comment": "m^2",
    "namezh": "水体面积"
  },
  "ZRHJZaiHai": {
    "type": "selectmultornull",
    "defaultValue": "null",
    "option": {
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
    "namezh": "灾害",
    "judge":{
      '0':5,
      '1':3,
      '2':3,
      'def':1
    },
    'judgeOutput':{
      '5':'不选，场地安全，无洪涝、滑坡、泥石流等自然灾害的威胁',
      '3':'选1-2项，虽有灾害但影响不大',
      '1':'选两项以上，灾害对村镇有影响',
    },
    "judgeReference":'在防灾减灾方面，以中心村为防灾减灾基本单元，整合各类减灾资源，确定综合防灾减灾与公共安全保障体系，提出防洪排涝、防台风、消防、人防、抗震、地质灾害防护等规划原则、设防标准及防灾减灾措施；迁建村庄和新建镇区必须进行建设用地适宜性评价。在防洪排涝方面：按城乡统一规划，明确防洪标准，提出防洪设施建设的原则和要求。易受内涝灾害的镇（乡），应结合排水工程统一规划排涝工程，明确防内涝灾害标准，提出排涝设施布局和建设标准。位于地震基本烈度6度及以上地区的镇（乡），应根据相关标准确定镇（乡）域抗震设防标准，明确应急避难场所分布、救援通道建设、生命线工程建设的原则和要求。\n建设应从选址、基础、材料、结构、墙体等方面注重提升质量安全，在经济承受范围内最大限度落实各项防灾减灾措施，一般保证建筑实际使用寿命在35年以上。建设选址应处于安全地带，对可能受滑坡、泥石流、山洪等灾害影响的地段应采取技术措施处理，并通过相关部门组织的技术论证。',
  },
  "ZRHJHuanJingWuRan": {
    "type": "selectmultornull",
    "defaultValue": "null",
    "option": {
      "1": "未达标的厨房油烟",
      "2": "工业废气",
      "3": "污水",
      "4": "危险化学品",
      "5": "易燃易爆品",
      "6": "电磁辐射",
      "7": "垃圾堆",
      "8": "噪音",
      "9": "养殖户（企业）",
      "10": "含氡土壤",
      "11": "其他"
    },
    "namezh": "环境污染",
    "judge":{
      '0':5,
      '1':3,
      '2':3,
      'def':1,
    },
    'judgeOutput':{
      '5':'不选，场地安全，无危险化学品等污染源、易燃易爆危险源的威胁，无电磁辐射、含氡土壤等有害有毒物质的危害',
      '3':'选1-2项，虽有有毒或有害物质但影响不大',
      '1':'选两项以上，场地周边有有毒或有害物质影响',
    },
    "judgeReference":'尽可能减少对自然环境的负面影响，如减少有害气体和废弃物的排放，减少对生态环境的破坏。\na优先选用已开发且具改造潜力的用地；场地环境应安全可靠，远离污染源，场地内应无洪涝、滑坡、泥石流等自然灾害的威胁，无危险化学品等污染源、易燃易爆危险源的威胁，无电磁辐射、含氡土壤等有害有毒物质的危害；保护自然生态环境，充分利用原有场地上的自然生态条件，注重建筑与自然生态环境的协调；避免建筑行为造成水土流失或其他灾害。\nb保障村庄饮用水安全，包括农村饮用水水源地保护区、饮用水水源地污染源治理、排污口拆迁、污染水净化处理等。畜禽养殖污染治理。包括村庄散养畜禽污染集中治理等。村庄生活污染治理。包括村庄生活污水处理设施、生活垃圾收集、转运和处理设施建设等。工矿企业污染治理。包括责任主体已灭失企业遗留的“三废”（废水、废气、废渣）污染治理等。存在其他类型突出环境问题的村庄，可以根据实际情况，确定具体治理内容。\nc建筑场地内不应存在未达标排放或者超标排放的气态、液态或固态的污染源，例如：未达标排放的厨房油烟，超标排放的煤气或其他工业废气，未经处理排放的污水，污染物排放超标的垃圾堆等。若有污染源应积极采取相应的治理措施并达到无超标污染物排放的要求。',
  },
  "ZRHJBinShuiLvDaiKuanDu": {
    "type": "select",
    "defaultValue": "null",
    "option": {
      "1": "＜10m",
      "2": "10m-20m",
      "3": "20m-30m",
      "4": "＞30m"
    },
    "namezh": "滨水绿带宽度"
  },
  "ZRHJSZQKShuiZhi": {
    "type": "select",
    "defaultValue": "null",
    "option": {
      "1": "Ⅰ类",
      "2": "Ⅱ类",
      "3": "Ⅲ类",
      "4": "Ⅳ类",
      "5": "Ⅴ类",
      "6": "劣Ⅴ类"
    },
    "namezh": "水质",
    'judge':{
      '1':5,
      '2':4,
      '3':3,
      '4':2,
      'def':1
    },
    "judgeReference":'根据当地自然和社会经济条件，提出污水处理目标，划定污水集中处理和分散处理的区域及方式。优化、确定污水集中处理设施的选址和规模，并布置排水主干管网；缺水且有条件的镇（乡）可进一步实施生活污水和工业污水独立系统，提出污（废）水综合利用或资源化措施，并布置中水管网等。',

  },
  "ZRHJSZQKShuiTiWuRan": {
    "type": "selectmultornull",
    "defaultValue": "null",
    "option": {
      "1": "工业废物",
      "2": "生活垃圾",
      "3": "其他"
    },
    "namezh": "水体污染",
    'judge':{
      '0':5,
      '1':3,
      'def':1
    },
    "judgeReference":'施工现场污水排放应达到国家标准《污水综合排放标准》（GB8978-1996）的要求。在施工现场应针对不同的污水，设置相应的处理设施，如沉淀池、隔油池、化粪池等。污水排放应委托有资质的单位进行废水水质检测，提供相应的污水检测报告。保护地下水环境。采用隔水性能好的边坡支护技术。在缺水地区或地下水位持续下降的地区，基坑降水尽可能少地抽取地下水；当基坑开挖抽水量大于50万m3时，应进行地下水回灌，并避免地下水被污染。对于化学品等有毒材料、油料的储存地，应有严格的隔水层设计，做好渗漏液收集和处理。',

  },
  "ZRHJSZQKMultField":{
    "type":"multFieldCount",
    'fields':[
      "RWHJMinZuYuYan",
      'RWHJMinZuFuShi',
      'RWHJJieQingYuXiSu',
      'RWHJShenHuaChuanShuoYuQiRenYiShi',
    ],
    'judge':{
      '0':1,
      '1':3,
      '2':3,
      'def':5
    },
    "namezh": "人文环境",
    "judgeReference":'发展绿色建筑体系，应注重地域性，尊重民族习俗，依据当地自然资源条件、经济状况、气候特点等，因地制宜地创造出具有时代特点和地域特征的绿色建筑；注重村镇历史性和文化特色，要尊重历史，加强对已建成环境和历史文脉的保护和再利用。',
  },

  "RWHJSheQuNaHuoDongZuZhiPinLv": {
    "type": "select",
    "defaultValue": "null",
    "option": {
      "1": "＜2次/月",
      "2": "2-5次/月",
      "3": "5-8次/月",
      "4": "8-10次/月",
      "5": "＞10次/月"
    },
    'judge':{
      '1':1,
      '2':2,
      '3':3,
      '4':4,
      '5':5,
    },
    "namezh": "社区内活动组织频率",
    "judgeReference":'文化、体育设施的室外活动场地错时向社会开放；办公建筑的室外场地在非办公时间向周边居民开放等。公共空间的共享既可增加公众的活动场所，有利陶冶情操、增进社会交往，又可提高各类设施和场地的使用效率，是绿色建筑倡导和鼓励的建设理念。',
  }
};