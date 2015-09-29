// Generated by CoffeeScript 1.9.3
var getDBvalue, getformvalue, getinputname, getkeyvalue, htmlstring, inputs, judgeother, putmodel, value;

getkeyvalue = function(url) {
  return $.ajax({
    url: url,
    dataType: 'json',
    async: false
  }).done(function(data) {
    return data;
  }).fail(function() {
    return alert("获取失败！请刷新页面");
  }).always(function() {
    return console.log("complete");
  });
};

getDBvalue = function(url, array) {
  return $.ajax({
    url: url,
    dataType: 'json',
    async: true
  }).done(function(data) {
    var a, b, c, classname, i, k, results, v, v1;
    console.log(data);
    results = [];
    for (k in data) {
      v = data[k];
      if (k === 'id') {
        continue;
      }
      a = $("#" + k);
      if (a.length > 0) {
        results.push($("#" + k).val(v));
      } else {
        if (typeof v === 'string') {
          v1 = v.split('&');
          results.push((function() {
            var j, len, results1;
            results1 = [];
            for (j = 0, len = v1.length; j < len; j++) {
              i = v1[j];
              b = $("input." + k + "[value='" + i + "']");
              classname = b.attr('class');
              if (classname !== void 0) {
                results1.push(b.prop('checked', true));
              } else {
                c = $("input." + k + "[value=nothing]").attr('class');
                if (c !== void 0 && i !== '' && i !== 'null') {
                  $("input." + k + "[value=nothing]").prop('checked', true);
                  $("input." + k + "[value=nothing]").val(i);
                  $("#" + k + "_other").css('display', 'inline-block');
                  results1.push($("#" + k + "_other").val(i));
                } else {
                  results1.push(void 0);
                }
              }
            }
            return results1;
          })());
        } else if (typeof v === 'number') {
          b = $("input." + k + "[value='" + v + "']");
          results.push(b.prop('checked', true));
        } else {
          results.push(void 0);
        }
      }
    }
    return results;
  }).fail(function() {
    return alert("数据库获取数据失败");
  }).always(function() {
    return console.log('DB_connect');
  });
};

putmodel = function(string, array, inputs) {
  var a, b, dataType, defaultvalue, fieldid, fieldname, html, id, itemlength, j, k, l, len, len1, mend, ref, ref1, ref2, ref3, str, title, v;
  html = "";
  for (j = 0, len = array.length; j < len; j++) {
    a = array[j];
    title = a.classname;
    id = a["class"];
    html = "<div id='" + id + "' class='content'> <h1>" + title + "</h1>";
    ref = a.childfield;
    for (l = 0, len1 = ref.length; l < len1; l++) {
      b = ref[l];
      fieldname = b.fieldname;
      fieldid = b.field;
      dataType = b.datatype;
      defaultvalue = b["default"];
      inputs = getinputname(fieldid, inputs);
      mend = "";
      str = "";
      if (dataType === 'selecttext') {
        itemlength = b.items.length;
        ref1 = b.items;
        for (k in ref1) {
          v = ref1[k];
          if (v === "其他______" || v === "有______") {
            v = v.split('_')[0];
            str += "<input type='radio' class='" + fieldid + " selecttext other' name='" + fieldid + "' value='nothing'/>" + v + "<input type='text' class='otherdata' id='" + fieldid + "_other'/>";
          } else {
            str += "<input type='radio' class='" + fieldid + " selecttext' name='" + fieldid + "' value='" + v + "' />" + v;
          }
          if (v.length >= 10) {
            str += "<br / >";
            if (itemlength >= 5 || fieldid === 'NenYuanLiYongKeZaiShengNenYuanZhiJieLiYong' || fieldid === 'NenYuanLiYongKeZaiShengNenYuanZhuanHuanLiYong') {
              mend = "style='height:250px'";
            } else {
              mend = "style='height:180px'";
            }
          }
        }
      } else if (dataType === 'mutiselecttext') {
        ref2 = b.items;
        for (k in ref2) {
          v = ref2[k];
          if (v === "其他______") {
            v = v.split('_')[0];
            str += "<input type='checkbox' class='" + fieldid + " mutiselecttext other' name='" + fieldid + "' value='nothing'/>" + v + "<input type='text' class='otherdata' id='" + fieldid + "_other'/>";
          } else {
            str += "<input type='checkbox' class='" + fieldid + " mutiselecttext' name='" + fieldid + "' value='" + v + "'/>" + v;
          }
        }
      } else if (dataType === 'bool') {
        ref3 = b.items;
        for (k in ref3) {
          v = ref3[k];
          str += "<input type='radio' class='" + fieldid + " selecttext' name='" + fieldid + "' value='" + k + "'/>" + v;
        }
      } else {
        str = "<input type='text' id='" + fieldid + "' name='" + fieldid + "' />";
      }
      html += "<div class='list' " + mend + "> <div class='note'> <h3>" + fieldname + "</h3> </div> <div class='input'> " + str + " </div> </div>";
    }
    html += "</div><hr />";
    string += html;
  }
  $('#J_form').append(string);
  return inputs;
};

judgeother = function(point) {
  var flag, input, name, target, that, type;
  target = $(point).attr('class').split(' ');
  flag = target[2];
  type = target[1];
  name = target[0];
  input = $("#" + name + "_other");
  if (type === 'mutiselecttext') {
    if (flag === 'other') {
      if ($(point).prop('checked')) {
        input.css('display', 'inline-block');
      } else {
        input.css('display', 'none');
      }
      that = point;
      return input.on('blur', function() {
        return $(that).val($(this).val());
      });
    } else {

    }
  } else if (type === 'selecttext') {
    if (flag === 'other') {
      input.css('display', 'inline-block');
    } else {
      input.css('display', 'none');
    }
    that = point;
    return input.on('blur', function() {
      return $(that).val($(this).val());
    });
  }
};

getinputname = function(value, target) {
  var a, j, len;
  for (j = 0, len = target.length; j < len; j++) {
    a = target[j];
    if (a === value) {
      return target;
    }
  }
  target.push(value);
  return target;
};

getformvalue = function(array) {
  var classname, data, flag, i, j, len, str, target, targetclass, value;
  data = {
    "id": id
  };
  flag = 0;
  for (j = 0, len = array.length; j < len; j++) {
    i = array[j];
    target = $("input[name=" + i + "]");
    value = target.val();
    targetclass = target.attr('class');
    if (targetclass !== void 0) {
      classname = targetclass.split(' ')[1];
      if (classname === 'selecttext') {
        value = $("input[name=" + i + "]:checked").val();
      } else if (classname === 'mutiselecttext') {
        str = '';
        $("input[name=" + i + "]:checkbox").each(function() {
          if ($(this).prop('checked')) {
            return str += "&" + $(this).val();
          }
        });
        value = str;
      }
    }
    if (value === '') {
      flag = 1;
    }
    data[i] = value;
  }
  return {
    data: data,
    flag: flag
  };
};

value = JSON.parse(getkeyvalue('/input/field').responseText);

htmlstring = "";

inputs = [];

inputs = putmodel(htmlstring, value, inputs);

getDBvalue("/input/get/" + id, inputs);

$("input[type='radio']").on('click', function() {
  return judgeother(this);
});

$("input[type='checkbox']").on('click', function() {
  return judgeother(this);
});

$('.save').on('click', function() {
  var target;
  target = getformvalue(inputs);
  value = target.data;
  console.log(value);
  return $.post('/input/update', value, function(data) {
    alert('保存成功');
    return getDBvalue("/input/get/" + id, inputs);
  });
});

$('.submit').on('click', function() {
  var target;
  target = getformvalue(inputs);
  value = target.data;
  if (target.flag) {
    return alert("没有填写完整，请检查");
  } else {
    return $.post('/input/update', value, function(data) {
      alert('提交成功');
      return location.href = "/";
    });
  }
});
