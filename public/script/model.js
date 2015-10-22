// Generated by CoffeeScript 1.9.3
var Model;

Model = (function() {
  var CCS, builddbvalue, buildkeys, checkdata, ergodicdata, getdatabyajax, getformvalue, gethtmlstring, htmlstring, judgeother, reqcontainer;

  function Model(url, target1, id1) {
    this.target = target1;
    this.id = id1;
    this.inputnames = [];
    this.modeldata = getdatabyajax(url).responseJSON;
  }

  CCS = {
    color: {
      'R': '红',
      'OR': '橙红',
      'O': '橙',
      'OY': '橙黄',
      'Y': '黄',
      'YG': '黄绿',
      'G': '绿',
      'BG': '蓝绿',
      'B': '蓝',
      'BV': '青紫',
      'V': '紫罗兰',
      'VR': '紫红'
    },
    light: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    pure: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };

  htmlstring = '';

  reqcontainer = {};

  getdatabyajax = function(url) {
    return $.ajax({
      url: this.url,
      dataType: 'json',
      async: false
    }).done(function(data) {
      return data;
    }).fail(function() {
      return 0;
    });
  };

  buildkeys = function(value, target) {
    var a, j, len1;
    for (j = 0, len1 = target.length; j < len1; j++) {
      a = target[j];
      if (a === value) {
        return target;
      }
    }
    target.push(value);
    return target;
  };

  gethtmlstring = function(data, id) {
    var i, j, k, l, len1, len2, ref, ref1, ref2, selects, str, str_color, str_end, str_light, str_pure, tmp, type, v, value;
    type = data.type;
    value = data.defaultValue;
    if (value === 'null' || value === void 0) {
      value = "";
    }
    if (type === 'input') {
      str = "<input type='text' id='" + id + "' data-type='input' class='input' name='" + id + "' value='" + value + "'/>";
    } else if (type === 'select') {
      tmp = "";
      tmp += "<select name='" + id + "' id='" + id + "' data-type='select' class='chosen-select'>";
      selects = data.option;
      for (k in selects) {
        v = selects[k];
        tmp += "<option value='" + v + "' class='" + id + "_" + k + "'>" + v + "</option>";
      }
      str = tmp + "</select>";
    } else if (type === 'selectmult') {
      tmp = "";
      tmp += "<select name='" + id + "' id='" + id + "' data-type='selectmult' class='chosen-select' multiple>";
      selects = data.option;
      for (k in selects) {
        v = selects[k];
        tmp += "<option value='" + v + "' class='" + id + "_" + k + "'>" + v + "</option>";
      }
      str = tmp + "</select>";
    } else if (type === 'CCS') {
      str_color = "<div class='ccs_color s_show'>颜色<select name='" + id + "_color' class='CCS ccscolor' id='" + id + "_color'>";
      str_light = "<div class='ccs_light s_show'>亮度<select name='" + id + "_light' class='CCS ccslight' id='" + id + "_light'>";
      str_pure = "<div class='css_pure s_show'>纯度<select name='" + id + "_pure' class='CCS ccspure' id='" + id + "_pure'>";
      str_end = "</select></div>";
      ref = CCS.color;
      for (k in ref) {
        v = ref[k];
        str_color += "<option value='" + k + "'>" + v + "</option>";
      }
      str_color += str_end;
      ref1 = CCS.light;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        i = ref1[j];
        str_light += "<option value='" + i + "'>" + i + "</option>";
      }
      str_light += str_end;
      ref2 = CCS.pure;
      for (l = 0, len2 = ref2.length; l < len2; l++) {
        i = ref2[l];
        str_pure += "<option value='" + i + "'>" + i + "</option>";
      }
      str_pure += str_end;
      str = ("<div id='" + id + "' data-type='CCS'>") + str_color + str_light + str_pure + "</div>";
    } else if (type === 'inputornull') {
      tmp = "";
      tmp += "<select name='" + id + "' id='" + id + "' data-type='inputornull' class='chosen-select inputornull'>";
      selects = data.option;
      for (k in selects) {
        v = selects[k];
        if (v === "有" || v === '其他') {
          tmp += "<option value='" + v + "' class='" + id + "_" + k + " other'>" + v + "</option>";
        } else {
          tmp += "<option value='" + v + "' class='" + id + "_" + k + "'>" + v + "</option>";
        }
      }
      str = tmp + ("<input type='text' class='otherdata' id='" + id + "_other'/>");
    } else if (type === 'selectmultornull') {
      tmp = "<input id='" + id + "' name='" + id + "' data-type='selectmultornull' class='selectmultornull' type='checkbox'>有<select name='" + id + "_other' class='chosen-select otherdata' multiple>";
      selects = data.option;
      for (k in selects) {
        v = selects[k];
        tmp += "<option value='" + v + "' class='" + id + "_" + k + "'>" + v + "</option>";
      }
      str = tmp + "</select>";
    } else if (type === 'boolean') {
      str = "<div id='" + id + "' data-type='boolean' ><input type='radio' name='" + id + "' value='true'/>是 <input type='radio' name='" + id + "' value='false'/>否</div>";
    } else {
      str = '';
    }
    return str;
  };

  ergodicdata = function(modeldata, position, inputnames, flag) {
    var i, j, len, mend, ref, results, storeobj, str, target, title;
    target = modeldata[position];
    if (target.forend !== void 0 && target.fields === void 0) {
      title = target.namezh;
      str = gethtmlstring(target.forend, target.name);
      inputnames = buildkeys(target.name, inputnames);
      if (target.require !== void 0) {
        mend = "style='display:none'";
        storeobj = reqcontainer["" + target.require.name];
        if (storeobj === void 0) {
          storeobj = {};
        }
        storeobj["" + target.name] = "" + target.require.value;
        reqcontainer["" + target.require.name] = storeobj;
      } else {
        mend = "";
      }
      htmlstring += "<div class='list' " + mend + "> <div class='note'> <h5>" + title + "</h5> </div> <div class='shuru'> " + str + " </div> </div>";
    } else {
      len = target.fields.length;
      results = [];
      for (i = j = 0, ref = len; j < ref; i = j += 1) {
        if (flag === 0) {
          title = target.namezh;
          htmlstring += "<div id='" + target.name + "' class='J_content'> <h3>" + title + "</h3></div><div class='clear'></div><hr />";
          flag = 1;
        }
        results.push(ergodicdata(target.fields, i, inputnames, flag));
      }
      return results;
    }
  };

  judgeother = function(point) {
    var check, id, input, type;
    id = point.id;
    type = point.name;
    check = point.type;
    input = $("#" + type + "_other");
    return $(point).on("change", function() {
      var flag, j, len1, ref, t, value;
      flag = 0;
      if (check === 'checkbox') {
        if ($(point).prop('checked')) {
          flag = 1;
        } else {
          flag = 0;
        }
      } else {
        value = $(point).val();
        if (value !== null) {
          if (typeof value === 'string') {
            if (value === "其他" || value === "有") {
              flag = 1;
            }
          } else if (typeof value === 'object') {
            ref = $(point).val();
            for (j = 0, len1 = ref.length; j < len1; j++) {
              t = ref[j];
              if (t === "其他" || t === "有") {
                flag = 1;
              }
            }
          } else {
            flag = 0;
          }
        }
      }
      if (flag) {
        return input.css('display', 'inline-block');
      } else {
        return input.css('display', 'none');
      }
    });
  };

  builddbvalue = function(type, value, idp) {
    var color, dbvalue, i, j, l, len1, len2, light, othervalue, pure, target;
    if (value == null) {
      value = '';
    }
    if (idp == null) {
      idp = '';
    }
    if (type === ('input' || 'boolean' || 'select')) {
      if (value !== ("" || void 0)) {
        dbvalue = type + "_" + value;
      }
    } else if (type === 'selectmult') {
      if (value instanceof 'Array') {
        dbvalue = type + "_";
        for (j = 0, len1 = value.length; j < len1; j++) {
          i = value[j];
          dbvalue += i + "&";
        }
      }
    } else if (type === 'CCS') {
      dbvalue = "CCS_";
      color = $("select[name=" + i + "_color]").val();
      light = $("select[name=" + i + "_light]").val();
      pure = $("select[name=" + i + "_pure]").val();
      dbvalue += color + "&" + light + "&" + pure;
    } else if (type === 'selectmultornull') {
      target = $("input#" + idp + "[type=checkbox]");
      dbvalue = type + "_";
      if (target.prop('checked')) {
        value = $("select[name=#" + idp + "_other]").val();
        if (value instanceof 'Array') {
          for (l = 0, len2 = value.length; l < len2; l++) {
            i = value[l];
            dbvalue += i + "&";
          }
        } else {
          dbvalue = type + "_null";
        }
      } else {
        dbvalue = type + "_null";
      }
    } else if (type === 'inputornull') {
      dbvalue = type + "_";
      if (value === ('其他' || '有')) {
        othervalue = $("#" + idp + "_other").val();
        if (othervalue === ("" || null)) {
          dbvalue += value + "-";
        } else {
          dbvalue += value + "-othervalue";
        }
      } else if (value !== ("" || void 0)) {
        dbvalue += "" + value;
      }
    }
    return dbvalue;
  };

  getformvalue = function(form, inputnames, editid) {
    var data, datatype, flag, i, j, len1, result, target;
    data = {
      "id": editid
    };
    flag = [];
    for (j = 0, len1 = inputnames.length; j < len1; j++) {
      i = inputnames[j];
      target = $("#" + form + " input#" + i + "[type=text]");
      if (target.length < 1) {
        target = $("#" + form + " input[name=" + i + "]:checked");
        if (target.length < 1) {
          target = $("#" + form + " input#" + i + "[type=checkbox]");
          if (target.length < 1) {
            target = $("#" + form + " select[name=" + i + "]");
            if (target.length < 1) {
              result = builddbvalue('CCS', "", i);
            } else {
              datatype = target.data("data");
              result = builddbvalue(datatype, target.val(), i);
            }
          } else {
            result = builddbvalue('selectmultornull', "", i);
          }
        } else {
          result = builddbvalue('boolean', target.val());
        }
      } else {
        result = builddbvalue('input', target.val());
      }
      data[i] = result;
    }
    return data;
  };

  checkdata = function(datatype, value, key) {
    var domtype, match, values;
    domtype = $("#" + key).data('type');
    if (domtype !== datatype) {
      return false;
    } else if (type === 'input') {
      $("#" + key).val(value);
      return true;
    } else if (type === 'select') {
      $("#" + key).val(value);
      return true;
    } else if (type === 'selectmult') {
      if (value !== "") {
        values = value.split("&");
        $("#" + key).val(values);
      } else {
        $("#" + key).val("");
      }
      return true;
    } else if (type === 'CCS') {
      values = value.split("&");
      $("#" + key + "_color").val(values[0]);
      $("#" + key + "_light").val(values[1]);
      $("#" + key + "_pure").val(values[2]);
      return true;
    } else if (type === 'inputornull') {
      if (value !== "") {
        match = /\-/g;
        if (match.test(value)) {
          values = value.split("-");
          $("#" + key).val(values[0]);
          $("#" + key + "_other").val(values[1]);
          $("#" + key + "_other").css('display', 'inline-block');
        } else {
          $("#" + key).val(value);
        }
      } else {
        $("#" + key).val(value);
      }
      return true;
    } else if (type === 'selectmultornull') {
      if (value !== "null") {
        values = value.split("&");
        $("#" + key).prop('checked', true);
        $("#" + key + "_other").val(values);
        $("#" + key + "_other").css('display', 'inline-block');
      } else {
        $("#" + key).prop('checked', false);
      }
      return true;
    } else if (type === 'boolean') {
      $("#" + key + " input[value=" + value + "]").prop('checked', 'true');
      return true;
    } else {
      return false;
    }
  };

  Model.prototype.init = function() {
    var finalhtmlstring, i, j, len, ref;
    len = this.modeldata.length;
    for (i = j = 0, ref = len; j < ref; i = j += 1) {
      ergodicdata(this.modeldata, i, this.inputnames, 0);
    }
    finalhtmlstring = htmlstring;
    console.log(reqcontainer);
    return $("#" + this.target).append(finalhtmlstring);
  };

  Model.prototype.getdbdata = function(url) {
    var datatype, dbdata, k, result, v, value;
    dbdata = getdatabyajax(url).responseJSON;
    for (k in dbdata) {
      v = dbdata[k];
      if (k === 'id') {
        continue;
      }
      if (v !== null || v !== "") {
        result = v.split("_");
        datatype = result[0];
        value = result[1];
      }
      result = checkdata(datatype, value, k);
      if (!result) {
        console.log('不匹配');
      }
    }
    return jQuery.getScript("/script/chosen.jquery.js").done(function() {
      var dom, j, l, len1, len2, ref, ref1, results;
      $('.chosen-select').chosen();
      ref = $(".inputornull");
      for (j = 0, len1 = ref.length; j < len1; j++) {
        dom = ref[j];
        judgeother(dom);
      }
      ref1 = $(".selectmultornull");
      results = [];
      for (l = 0, len2 = ref1.length; l < len2; l++) {
        dom = ref1[l];
        results.push(judgeother(dom));
      }
      return results;
    }).fail(function() {
      return alert("动态脚本加载失败");
    });
  };

  Model.prototype.savedata = function(clickbtn) {
    return $("#" + clickbtn).on('click', function() {
      var result;
      result = getformvalue(this.target, this.inputnames);
      $.post('/input/update', result.data, function(data) {
        return alert('保存成功');
      });
      return result.jundge;
    });
  };

  return Model;

})();
