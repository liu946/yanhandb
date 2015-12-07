/**
 * Created by liu on 15/12/6.
 */

var ruleGroups = {
  'cunzhen': require('./cunzhen'),
  'kaichangkongjian': require('./kaichangkongjian'),
  'jiedaokongjian': require('./jiedaokongjian'),
}
module.exports = {
  addOne: function (item, rulesGroup, array, globalRecoder) {
    var rules = ruleGroups[rulesGroup];
    var breakcount = 0;
    for (var fieldName in rules) {
      var oneRule = {}
      var rule = rules[fieldName];
      var k;
      if (rule.hasOwnProperty('judge')) {
        //需要判定的
        //break count 会自动跳过一些判定项
        if(breakcount>0){
          breakcount--;
          oneRule['number'] = 0;
          oneRule['score'] = 0;
        }else{
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
              if(!item[fieldName]){
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
      }
      if (globalRecoder.hasOwnProperty(rulesGroup + fieldName)) {
        if (globalRecoder[rulesGroup + fieldName].score !== undefined
          && globalRecoder[rulesGroup + fieldName].number !== undefined
        ) {
          globalRecoder[rulesGroup + fieldName].score += oneRule.score;
          globalRecoder[rulesGroup + fieldName].number += oneRule.number;
          if(oneRule.number){
            if(globalRecoder[rulesGroup + fieldName].value==='null'){
              globalRecoder[rulesGroup + fieldName].match = (oneRule.match);
              globalRecoder[rulesGroup + fieldName].value = (oneRule.value);
            }else{
              globalRecoder[rulesGroup + fieldName].match += (',' + oneRule.match);
              globalRecoder[rulesGroup + fieldName].value += (',' + oneRule.value);
            }

          }
        }
      } else {
        globalRecoder[rulesGroup + fieldName] = oneRule;
        array.push(oneRule);
      }
    }
  }
};