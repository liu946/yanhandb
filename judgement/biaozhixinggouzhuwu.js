/**
 * Created by liu on 15/12/14.
 */
module.exports= {
  "BianHao": {
    "type": "input",
    "defaultValue": "null",
    "comment": "英文字母+数字（对每条街道编号后分别录入下列内容）",
    "namezh": "编号"
  },
  "LeiXing": {
    "type": "select",
    "option": {
      "1": "雕塑",
      "3": "市政设施",
      "4": "其他"
    },
    "namezh": "类型"
  },
  "ZhuTi": {
    "type": "select",
    "option": {
      "1": "人物",
      "2": "民族符号",
      "3": "几何图形",
      "4": "地方标志",
      "5": "动植物",
      "6": "其他"
    },
    "namezh": "主题"
  },
  "CaiZhi": {
    "type": "select",
    "option": {
      "1": "金属",
      "2": "石材",
      "3": "粘土砖",
      "4": "塑料",
      "5": "木材",
      "6": "其他"
    },
    "namezh": "材质"
  },
  "YuZhouBianJianZhuGaoDuBiLiGuanXi": {
    "type": "select",
    "option": {
      "1": "＜1",
      "2": "1-2",
      "3": "2-3",
      "4": "＞3"
    },
    "namezh": "与周边建筑高度比例关系"
  },
  "YanSe": {
    "type": "CCS",
    "namezh": "颜色"
  }
};