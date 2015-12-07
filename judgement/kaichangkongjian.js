/**
 * Created by liu on 15/12/7.
 */
module.exports = {
  "BianHao": {
    "type": "input",
    "defaultValue": "null",
    "comment": "英文字母+数字（对每条街道编号后分别录入下列内容）",
    "namezh": "编号",
    'judge':{
      'def':5
    },
    'judgeOutput':{
      '5':'有开敞空间',
    },
    "judgeReference":'如建筑中设有共用的会议设施、展览设施、健身设施以及交往空间、休息空间等；小学、中学、大学等专用运动场所科学管理，在非校用时间向社会公众开放；文化、体育设施的室外活动场地错时向社会开放；办公建筑的室外场地在非办公时间向周边居民开放等。公共空间的共享既可增加公众的活动场所，有利陶冶情操、增进社会交往，又可提高各类设施和场地的使用效率，是绿色建筑倡导和鼓励的建设理念。',
  },
  "GongNen": {
    "type": "selectmult",
    "defaultValue": "null",
    "option": {
      "1": "文体活动",
      "2": "休憩交往",
      "3": "展示",
      "4": "晒场",
      "5": "其他"
    },
    "namezh": "功能",
    'judge':{
      '0':1,
      '1':3,
      '2':4,
      'def':5,
    },
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
  "SheShi": {
    "type": "selectmult",
    "defaultValue": "null",
    "option": {
      "1": "雕塑",
      "2": "座椅",
      "3": "健身器械",
      "4": "其他"
    },
    'judge':{
      '1':3,
      '2':4,
      'def':5,
    },
    "namezh": "设施"
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
      '<10':1,
      '<20':2,
      '<30':3,
      '<40':4,
      'def':5,
    },
  },
  "YouWuLaJiXiang": {
    "type": "boolean",
    "namezh": "有无垃圾箱",
    'judge':'false',
    'break':1
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
    'break':1
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
  },
  "HuoDongZuZhi": {
    "type": "select",
    "defaultValue": "null",
    "option": {
      "1": "＜2次/周",
      "2": "2-5次/周",
      "3": "＞5次/周"
    },
    "namezh": "活动组织",
    'judge':{
      '1':1,
      '2':3,
      'def':5,
    },
  }
}