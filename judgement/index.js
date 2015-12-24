/**
 * Created by liu on 15/12/6.
 */

var ruleGroups = {
  'cunzhen': require('./cunzhen'),
  'kaichangkongjian': require('./kaichangkongjian'),
  'jiedaokongjian': require('./jiedaokongjian'),
  'tingyuanyujianzhu':require('./tingyuanyujianzhu'),
  'biaozhixinggouzhuwu':require('./biaozhixinggouzhuwu'),
};

module.exports = {
  addOne: function (item, rulesGroup, array, globalRecoder) {
    var rules = ruleGroups[rulesGroup];
    var breakcount = 0;
    for (var fieldName in rules) {
      var oneRule = {};
      var rule = rules[fieldName];
      var k;
      if (rule.hasOwnProperty('judge')) {
        //需要判定的
        //break count 会自动跳过一些判定项
        if (breakcount > 0) {
          breakcount--;
          oneRule['number'] = 0;
          oneRule['score'] = 0;

        } else {
          switch (rule.type) {
            case 'select':
              if ('null' === item[fieldName]) {
                oneRule['number'] = 0;
                oneRule['score'] = 0;
                break;
              }
              for (k in rule.judge) {
                if (k === 'def') {
                  break;
                } else if (rule.option[k] === item[fieldName]) {
                  break;
                }
              }
              break;
            case 'selectmult':
            case 'selectmultornull':
              var count = item[fieldName].split('&').length - 1;
              for (k in rule.judge) {
                if (k === 'def') {
                  oneRule['value'] = count.toString();
                  break;
                } else if (k === count.toString()) {
                  oneRule['value'] = count.toString();
                  break;
                }
              }
              break;
            case 'input':
              if (-1 != ['', 'null', null, '无'].indexOf(item[fieldName])) {
                oneRule['number'] = 0;
                oneRule['score'] = 0;
                break;
              }
              for (k in rule.judge) {
                if (k === 'def') {
                  break;
                } else if (eval(item[fieldName] + k)) {
                  break;
                }
              }
              break;
            case 'multFieldCount':
              var multfield_conter = 0;
              oneRule['value'] = '';
              for (var countField_i in rule.fields) {
                var countField = rule.fields[countField_i];
                var fieldValue = item[countField];
                if (!(fieldValue in ['', '无', null, 'null'] )) {
                  multfield_conter++;
                }
                oneRule['value'] += ( countField + ' : ' + fieldValue + '\n' );
              }
              for (k in rule.judge) {
                if (k === 'def') {
                  oneRule['match'] = multfield_conter.toString();
                  break;
                } else if (k === multfield_conter.toString()) {
                  oneRule['match'] = multfield_conter.toString();
                  break;
                }
              }
              break;
            case 'boolean':
              if (!item[fieldName]) {
                breakcount = rule.break;
              }
              break;
          }
        }


        if (!oneRule.hasOwnProperty('match') && k) {
          oneRule['match'] = k;
        }
        if (!oneRule.hasOwnProperty('score') && rule.judge[k]) {
          oneRule['score'] = rule.judge[k];
        }
        if (!oneRule.hasOwnProperty('number')) {
          oneRule['number'] = 1;
        }
        if (!oneRule.hasOwnProperty('judgeOutput') && rule.judgeOutput) {
          oneRule['judgeOutput'] = rule.judgeOutput[oneRule['score']];
        }
        if (!oneRule.hasOwnProperty('judgeReference') && rule.judgeReference) {
          oneRule['judgeReference'] = rule.judgeReference;
        }
      }


      // 包括无需判断的，需要加上他们的其他字段。


      if (!oneRule.hasOwnProperty('namezh') && rule.namezh) {
        oneRule['namezh'] = rule.namezh;
      }
      if (!oneRule.hasOwnProperty('value') && item[fieldName] !== undefined) {
        oneRule['value'] = item[fieldName];
        if(globalRecoder[rulesGroup + fieldName] && globalRecoder[rulesGroup + fieldName].percent){
          oneRule.percent= globalRecoder[rulesGroup + fieldName].percent;
        }
        if (rule.type === 'select') {
          if (oneRule.percent===undefined)
            oneRule.percent = {};
          if (oneRule.percent[oneRule.value.toString()]===undefined)
            oneRule.percent[oneRule.value.toString()]=0;

          oneRule.percent[oneRule.value.toString()]++;

        } else if (rule.type === 'selectmult' || rule.type === 'selectmultornull') {
          var steplist = item[fieldName].split('&');
          for (var step in steplist) {
            var x = steplist[step];
            if (x !== '') {
              if (oneRule.percent === undefined)
                oneRule.percent = {};
              if (oneRule.percent[x] === undefined)
                oneRule.percent[x] = 0;

              oneRule.percent[x]++;
            }
          }
        }

      }
      var colormap ={'R':'红_rgb(255,0,0)',
        'OR': '橙红_rgb(255,51,0)',
        'O': '橙_rgb(255,102,0)',
        'OY': '橙黄_rgb(255,153,0)',
        'Y': '黄_rgb(255,255,0)',
        'YG': '黄绿_rgb(153,255,0)',
        'G': '绿_rgb(0,255,0)',
        'BG': '蓝绿_rgb(0,255,255)',
        'B': '蓝_rgb(0,0,255)',
        'BV': '青紫_rgb(102,0,255)',
        'V': '紫罗兰_rgb(255,0,255)',
        'VR': '紫红_rgb(255,0,102)'}
      if (globalRecoder.hasOwnProperty(rulesGroup + fieldName)) {
        if(rule.type === 'input' && item[fieldName]){
          globalRecoder[rulesGroup + fieldName].allvalue = globalRecoder[rulesGroup + fieldName].allvalue? globalRecoder[rulesGroup + fieldName].allvalue+ item[fieldName]:item[fieldName];
          globalRecoder[rulesGroup + fieldName].allvaluecount = globalRecoder[rulesGroup + fieldName].allvaluecount ? globalRecoder[rulesGroup + fieldName].allvaluecount + 1:1;
        }
        if(rule.type === 'CCS' && item[fieldName] && item[fieldName]!='null&null&null'){
          if (undefined === globalRecoder[rulesGroup + fieldName].percent){
            globalRecoder[rulesGroup + fieldName].percent = {};
          }
          var color = colormap[item[fieldName].split('&')[0]];
          color = color?color.split('_')[0] : 'NULL';
          globalRecoder[rulesGroup + fieldName].percent[color] = globalRecoder[rulesGroup + fieldName].percent[color] ? globalRecoder[rulesGroup + fieldName].percent[color]+1:1;
        }
        if (globalRecoder[rulesGroup + fieldName].score !== undefined
          && globalRecoder[rulesGroup + fieldName].number !== undefined
        ) {
          globalRecoder[rulesGroup + fieldName].score += oneRule.score;
          globalRecoder[rulesGroup + fieldName].number += oneRule.number;
          if (oneRule.number) {
            if (globalRecoder[rulesGroup + fieldName].value === 'null') {
              globalRecoder[rulesGroup + fieldName].match = (oneRule.match);
              globalRecoder[rulesGroup + fieldName].value = (oneRule.value);
            } else {
              globalRecoder[rulesGroup + fieldName].match += (',' + oneRule.match);
              globalRecoder[rulesGroup + fieldName].value += (',' + oneRule.value);
            }

          }

        }

      } else {
        globalRecoder[rulesGroup + fieldName] = oneRule;
        if(rule.type === 'input' && item[fieldName]){
          globalRecoder[rulesGroup + fieldName].allvalue = globalRecoder[rulesGroup + fieldName].allvalue? globalRecoder[rulesGroup + fieldName].allvalue+ item[fieldName]:item[fieldName];
          globalRecoder[rulesGroup + fieldName].allvaluecount = globalRecoder[rulesGroup + fieldName].allvaluecount ? globalRecoder[rulesGroup + fieldName].allvaluecount + 1:1;
        }
        if(rule.type === 'CCS' && item[fieldName] && item[fieldName]!='null&null&null'){
          if (undefined === globalRecoder[rulesGroup + fieldName].percent){
            globalRecoder[rulesGroup + fieldName].percent = {};
          }
          var color = colormap[item[fieldName].split('&')[0]];
          color = color?color.split('_')[0] : 'NULL';
          globalRecoder[rulesGroup + fieldName].percent[color] = globalRecoder[rulesGroup + fieldName].percent[color] ? globalRecoder[rulesGroup + fieldName].percent[color]+1:1;
        }
        if(rule.judgeReference){
          globalRecoder[rulesGroup + fieldName].judgeReference = rule.judgeReference;
        }
        array.push(oneRule);
      }
    }
  }
};