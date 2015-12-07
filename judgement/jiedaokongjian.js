/**
 * Created by liu on 15/12/7.
 */

module.exports = {
  "BianHao": {
    "type": "input",
    "defaultValue": "null",
    "comment": "英文字母+数字（对每条街道编号后分别录入下列内容）",
    "namezh": "编号"
  },
  "DH": {
    "type": "select",
    "defaultValue": "null",
    "option": {
      "1": "＜1",
      "2": "1-2",
      "3": "2-3",
      "4": "3-6",
      "5": "大于6"
    },
    "namezh": "D/H",
    'judge':{
      '1':1,
      '5':1,
      '2':3,
      '4':3,
      '3':5,
      'def':1,
    },
  },
  "PuDiCaiZhi": {
    "type": "select",
    "defaultValue": "null",
    "option": {
      "1": "裸土",
      "2": "水泥",
      "3": "沥青",
      "4": "石子",
      "5": "红砖",
      "6": "铺地砖",
      "7": "其他"
    },
    "namezh": "铺地材质"
  },
  "LvHuaLv": {
    "type": "input",
    "defaultValue": "0",
    "size": ".2",
    "comment": "百分比",
    "namezh": "绿化率",
    'judge':{
      '<60':1,
      '<70':2,
      '<80':3,
      '<90':4,
      '<=100':5,
      'def':0,
    },
  },
  "ZhaoMingFuGaiLv": {
    "type": "input",
    "defaultValue": "0",
    "size": ".2",
    "comment": "百分比",
    "namezh": "照明覆盖率",
    'judge':{
      '<80':1,
      '<100':3,
      '==100':5,
      'def':0,
    },
  },
  "LaJiQingYunPinLv": {
    "type": "select",
    "defaultValue": "null",
    "option": {
      "1": "＜1次/周",
      "2": "1-2次/周",
      "3": "3-5次/周",
      "4": "5次以上/周"
    },
    "namezh": "垃圾清运频率",
    'judge':{
      '1':1,
      '2':2,
      '3':3,
      '4':4,
      'def':0,
    },
    'judgeReference':'遵循村镇空间环境管制的规定，进行村镇环境卫生治理，包括垃圾、污水以及粪便处理，注重建筑对村镇人文环境的影响。\na.根据当地自然和社会经济条件，提出垃圾处理目标，划定垃圾集中处理和分散处理的区域及方式。提倡生活垃圾分类和垃圾资源化处置方式。根据需要规划垃圾集中处理设施和垃圾中转设施，确定其位置和占地规模。\nb.根据垃圾的来源、可否回用、处理要求等确立分类管理制度和必要的收集设施，并对垃圾的收集、运输等进行整体的合理规划，如果设置小型有机厨余垃圾处理设施，应考虑其合理性。其次，制定包括垃圾管理运行操作手册、管理设施、管理经费、人员配备及机构分工、监督机制、定期的岗位业务培训和突发事件的应急处理系统等内容的垃圾管理制度。最后，垃圾容器应具有密闭性能，其规格和位置应符合国家有关标准的规定，其数量、外观色彩及标志应符合垃圾分类收集的要求，并置于隐蔽、避风处，与周围景观相协调，坚固耐用，不易倾倒，防止垃圾无序倾倒和二次污染。'

  },
  "YouWuLaJiXiang": {
    "type": "boolean",
    "namezh": "有无垃圾箱",
    'judge':'false',
    'break':1,

  },
  "LJXShuLiang": {
    "type": "input",
    "defaultValue": "0",
    "comment": "若“无”录入0",
    "namezh": "数量"
  },
  "LJXYanSe": {
    "type": "CCS",
    "namezh": "颜色"
  },
  "LJXFuWuBanJing": {
    "type": "input",
    "defaultValue": "0",
    "comment": "数字m",
    "namezh": "服务半径",
    'judge':{
      '>300':1,
      '>150':3,
      'def':5,
    },
  },
  "YouWuZuoYi": {
    "type": "boolean",
    "namezh": "有无座椅",
    'judge':'false',
    'break':1,
  },
  "ZYShuLiang": {
    "type": "input",
    "defaultValue": "0",
    "comment": "若“无”录入0",
    "namezh": "数量"
  },
  "ZYYanSe": {
    "type": "CCS",
    "namezh": "颜色"
  },
  "ZYFuWuBanJing": {
    "type": "input",
    "defaultValue": "0",
    "comment": "数字m",
    "namezh": "服务半径",
    'judge':{
      '>2000':1,
      '>1000':3,
      'def':5,
    },
  },
  "YouWuShuChi": {
    "type": "boolean",
    "namezh": "有无树池"
  },
  "SCShuLiang": {
    "type": "input",
    "defaultValue": "0",
    "comment": "若“无”录入0",
    "namezh": "数量"
  },
  "SCYanSe": {
    "type": "CCS",
    "namezh": "颜色"
  }
}
