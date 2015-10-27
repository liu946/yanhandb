// Generated by CoffeeScript 1.9.3
var Model;

Model = (function() {
  var CCS, builddbvalue, buildkeys, checkdata, clickappear, ergodicdata, getdatabyajax, getdbdata, getformvalue, gethtmlstring, getotherinput, htmlstring, judgeother, jundgerequire, reqcontainer, reqevent;

  function Model(tablename1, target1, editid1) {
    this.tablename = tablename1;
    this.target = target1;
    this.editid = editid1;
    this.inputnames = [];
  }

  CCS = {
    color: {
      'R': '红_rgb(255,0,0)',
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
      'VR': '紫红_rgb(255,0,102)'
    },
    light: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    pure: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };

  htmlstring = '';

  reqcontainer = {};

  jundgerequire = function(target) {
    var mend, storeobj;
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
    return mend;
  };

  getdatabyajax = function(url) {
    return $.ajax({
      url: url,
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
    var flag, i, j, k, l, len1, len2, ref, ref1, ref2, selects, str, str_color, str_end, str_light, str_pure, tmp, type, v, value, vv;
    type = data.type;
    value = data.defaultValue;
    flag = 0;
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
        if (v === '有' || v === '其他') {
          flag = 1;
        }
      }
      tmp += "</select>";
      if (flag) {
        str = tmp + ("<input name='" + id + "_otherinput' type='text' class='otherinput'>");
      } else {
        str = tmp;
      }
    } else if (type === 'selectmult') {
      tmp = "";
      tmp += "<select name='" + id + "' id='" + id + "' data-type='selectmult' class='chosen-select' multiple>";
      selects = data.option;
      for (k in selects) {
        v = selects[k];
        tmp += "<option value='" + v + "' class='" + id + "_" + k + "'>" + v + "</option>";
        if (v === '有' || v === '其他') {
          flag = 1;
        }
      }
      tmp += "</select>";
      if (flag) {
        str = tmp + ("<input name='" + id + "_otherinput' type='text' class='otherinput'>");
      } else {
        str = tmp;
      }
    } else if (type === 'CCS') {
      str_color = "<div class='ccs_color s_show'>颜色<select name='" + id + "_color' class='CCS ccscolor' id='" + id + "_color'>";
      str_light = "<div class='ccs_light s_show'>亮度<select name='" + id + "_light' class='CCS ccslight' id='" + id + "_light'>";
      str_pure = "<div class='css_pure s_show'>纯度<select name='" + id + "_pure' class='CCS ccspure' id='" + id + "_pure'>";
      str_end = "</select></div>";
      ref = CCS.color;
      for (k in ref) {
        v = ref[k];
        vv = v.split("_");
        str_color += "<option value='" + k + "' style='background:" + vv[1] + "'>" + vv[0] + "</option>";
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
      str = "<input id='" + id + "' name='" + id + "' data-type='inputornull' class='inputornull' type='checkbox'>有<br/> <input name='" + id + "_other' type='text' class='otherinput'>";
    } else if (type === 'selectmultornull') {
      tmp = "<input id='" + id + "' name='" + id + "' data-type='selectmultornull' class='selectmultornull' type='checkbox'>有<br/><select name='" + id + "_other' id='" + id + "_other' class='chosen-select otherdata' multiple>";
      selects = data.option;
      for (k in selects) {
        v = selects[k];
        tmp += "<option value='" + v + "' class='" + id + "_" + k + "'>" + v + "</option>";
        if (v === '有' || v === '其他') {
          flag = 1;
        }
      }
      tmp += "</select>";
      if (flag) {
        str = tmp + ("<input name='" + id + "_other_otherinput' type='text' class='otherinput'>");
      } else {
        str = tmp;
      }
    } else if (type === 'boolean') {
      str = "<div id='" + id + "' data-type='boolean' ><input type='radio' name='" + id + "' value='1'/>是 <input type='radio' name='" + id + "' value='0'/>否</div>";
    } else {
      str = '';
    }
    return str;
  };

  ergodicdata = function(modeldata, position, inputnames) {
    var comment, i, j, len, mend, ref, results, str, target, title;
    target = modeldata[position];
    if (target.forend !== void 0 && target.fields === void 0) {
      title = target.namezh;
      str = gethtmlstring(target.forend, target.name);
      inputnames = buildkeys(target.name, inputnames);
      if (target.forend.comment !== void 0) {
        comment = "(" + target.forend.comment + ")";
      } else {
        comment = "";
      }
      mend = jundgerequire(target);
      htmlstring += "<div class='list' " + mend + "> <div class='note'> <h5>" + title + comment + "</h5> </div> <div class='shuru'> " + str + " </div> </div>";
    } else {
      len = target.fields.length;
      results = [];
      for (i = j = 0, ref = len; j < ref; i = j += 1) {
        if (i === 0) {
          title = target.namezh;
          mend = jundgerequire(target);
          htmlstring += "<div id='" + target.name + "' " + mend + "> <h3>" + title + "</h3>";
        }
        ergodicdata(target.fields, i, inputnames);
        if (i === len - 1) {
          results.push(htmlstring += "</div><div class='clear'></div><hr />");
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  };

  clickappear = function(id, check, datatype, point) {
    var flag, idp, input, input2, j, len1, t, value;
    flag = 0;
    if (check === 'checkbox' && datatype === 'selectmultornull') {
      idp = id + "_other";
      input = $("#" + idp + "_chzn");
      input2 = $("input[name=" + idp + "_otherinput]");
      if ($(point).prop('checked')) {
        flag = 1;
      } else {
        if (input2.length > 0) {
          input2.css('display', 'none');
        }
      }
    } else if (check === 'checkbox' && datatype === 'inputornull') {
      input = $("input[name=" + id + "_other]");
      if ($(point).prop('checked')) {
        flag = 1;
      }
    } else {
      input = $("input[name=" + id + "_otherinput]");
      value = $(point).val();
      if (value !== null || value !== void 0) {
        if (typeof value === 'string') {
          if (value === "其他" || value === "有") {
            flag = 1;
          }
        } else if (typeof value === 'object') {
          if (value !== null) {
            for (j = 0, len1 = value.length; j < len1; j++) {
              t = value[j];
              if (t === "其他" || t === "有") {
                flag = 1;
              }
            }
          }
        }
      }
    }
    if (flag) {
      return input.css('display', 'block');
    } else {
      return input.css('display', 'none');
    }
  };

  judgeother = function(point) {
    var check, datatype, id;
    id = point.id;
    check = point.type;
    datatype = $(point).data('type');
    clickappear(id, check, datatype, point);
    return $(point).on("change", function() {
      return clickappear(id, check, datatype, point);
    });
  };

  getotherinput = function(idp, type, value) {
    var va;
    va = "";
    if (type === 'selectmultornull') {
      idp += '_other';
    }
    if (value === '有' || value === '其他') {
      va = value + "~" + $("input[name=" + idp + "_otherinput]").val();
    }
    return va;
  };

  builddbvalue = function(type, idp) {
    var color, dbvalue, i, j, l, len1, len2, light, pure, result, target, value;
    dbvalue = "";
    if (type === 'input' || type === 'select') {
      value = $("#" + idp).val();
      if (value !== "" || value !== void 0 || value !== null) {
        result = getotherinput(idp, type, value);
        if (result !== "") {
          dbvalue = "" + result;
        } else {
          dbvalue = "" + value;
        }
      } else {
        dbvalue = "";
      }
    } else if (type === 'boolean') {
      dbvalue = $("input[name=" + idp + "]").val();
    } else if (type === 'selectmult') {
      value = $("#" + idp).val();
      if (value instanceof Array) {
        for (j = 0, len1 = value.length; j < len1; j++) {
          i = value[j];
          result = getotherinput(idp, type, i);
          if (result !== "") {
            dbvalue += result + "&";
          } else {
            dbvalue += i + "&";
          }
        }
      } else {
        dbvalue = "";
      }
    } else if (type === 'CCS') {
      color = $("#" + idp + "_color").val();
      light = $("#" + idp + "_light").val();
      pure = $("#" + idp + "_pure").val();
      dbvalue += color + "&" + light + "&" + pure;
    } else if (type === 'selectmultornull') {
      target = $("input#" + idp + "[type=checkbox]");
      if (target.prop('checked')) {
        value = $("select[name=" + idp + "_other]").val();
        if (value instanceof Array) {
          for (l = 0, len2 = value.length; l < len2; l++) {
            i = value[l];
            result = getotherinput(idp, type, i);
            if (result !== "") {
              dbvalue += result + "&";
            } else {
              dbvalue += i + "&";
            }
          }
        } else {
          dbvalue = "";
        }
      } else {
        dbvalue = "";
      }
    } else if (type === 'inputornull') {
      target = $("input#" + idp + "[type=checkbox]");
      if (target.prop('checked')) {
        dbvalue = $("input.otherdata[name=" + idp + "_other]").val();
      } else {
        dbvalue = "";
      }
    }
    return dbvalue;
  };

  getformvalue = function(form, inputnames, editid) {
    var data, i, j, len1, result, type;
    data = {
      "id": editid
    };
    for (j = 0, len1 = inputnames.length; j < len1; j++) {
      i = inputnames[j];
      type = $("#" + i).data('type');
      result = builddbvalue(type, i);
      data[i] = result;
    }
    return data;
  };

  checkdata = function(value, key) {
    var data, i, j, l, len1, len2, match, other, s, type, values;
    type = $("#" + key).data('type');
    if (value === null || value === void 0 || value === 'unll' || value === 'undefined') {
      value = "";
    }
    match = /\~/;
    if (type === 'input') {
      $("#" + key).val(value);
      return true;
    } else if (type === 'select') {
      if (match.test(value)) {
        values = value.split('~');
        value = values[0];
        other = values[1];
        $("input[name=" + key + "_otherinput]").val(other);
      }
      $("#" + key).val(value);
      return true;
    } else if (type === 'selectmult') {
      if (value !== "") {
        values = value.split("&");
        data = [];
        for (j = 0, len1 = values.length; j < len1; j++) {
          i = values[j];
          if (match.test(i)) {
            s = i.split('~');
            i = s[0];
            other = s[1];
            $("input[name=" + key + "_otherinput]").val(other);
          }
          data.push(i);
        }
        $("#" + key).val(data);
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
        $("#" + key).prop('checked', true);
        $("input.otherdata[name=" + key + "_other]").css('display', 'block');
        $("input.otherdata[name=" + key + "_other]").val(value);
      } else {
        $("#" + key).prop('checked', false);
      }
      return true;
    } else if (type === 'selectmultornull') {
      if (value !== "") {
        values = value.split("&");
        data = [];
        for (l = 0, len2 = values.length; l < len2; l++) {
          i = values[l];
          if (match.test(i)) {
            s = i.split('~');
            i = s[0];
            other = s[1];
            $("input[name=" + key + "_other_otherinput]").val(other);
          }
          data.push(i);
        }
        $("#" + key).prop('checked', true);
        $("#" + key + "_other").val(data);
        $("#" + key + "_other").css('display', 'block');
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

  getdbdata = function(tablename, id) {
    var dbdata, k, result, url, v, value;
    url = "/input/get/" + tablename + "/" + id;
    dbdata = getdatabyajax(url).responseJSON;
    for (k in dbdata) {
      v = dbdata[k];
      if (k === 'id') {
        continue;
      }
      if (v !== null) {
        value = v;
      } else {
        value = "";
      }
      result = checkdata(value, k);
      if (!result) {
        console.log('不匹配');
      }
    }
    return jQuery.getScript("/script/chosen.jquery.js").done(function() {
      var _id, dom, herd, i, j, l, len1, len2, len3, len4, len5, m, n, o, ref, ref1, ref2, ref3, results;
      $('.chosen-select').chosen();
      herd = $(".selectmultornull");
      for (j = 0, len1 = herd.length; j < len1; j++) {
        i = herd[j];
        id = $(i).attr('id');
        _id = $("." + id + "_other").attr('id');
        $("#" + _id + "_chzn").css("display", "none");
      }
      ref = $(".chzn-container");
      for (l = 0, len2 = ref.length; l < len2; l++) {
        dom = ref[l];
        $(dom).css('width', '250px');
      }
      ref1 = $(".inputornull");
      for (m = 0, len3 = ref1.length; m < len3; m++) {
        dom = ref1[m];
        judgeother(dom);
      }
      ref2 = $(".selectmultornull");
      for (n = 0, len4 = ref2.length; n < len4; n++) {
        dom = ref2[n];
        judgeother(dom);
      }
      ref3 = $("select");
      results = [];
      for (o = 0, len5 = ref3.length; o < len5; o++) {
        dom = ref3[o];
        results.push(judgeother(dom));
      }
      return results;
    }).fail(function() {
      return alert("动态脚本加载失败");
    });
  };

  reqevent = function(index, condition, target) {
    var datatype, flag, i, j, len1, obj, objf, ref, value;
    datatype = $("#" + index).data('type');
    if (datatype === 'boolean') {
      obj = $("#" + index + " input[value=1]");
      objf = $("#" + index + " input[value=0]");
      if (obj.prop('checked')) {
        $("#" + target).css('display', 'block');
      } else {
        $("#" + target).css('display', 'none');
      }
      obj.on('click', function() {
        return $("#" + target).css('display', 'block');
      });
      return objf.on('click', function() {
        return $("#" + target).css('display', 'none');
      });
    } else if (datatype === 'select') {
      obj = $("#" + index);
      if (obj.val() === condition) {
        $("#" + target).css('display', 'block');
      } else {
        $("#" + target).css('display', 'none');
      }
      return obj.on("change", function() {
        if ($(this).val() === condition) {
          return $("#" + target).css('display', 'block');
        } else {
          return $("#" + target).css('display', 'none');
        }
      });
    } else if (datatype === 'selectmult') {
      obj = $("#" + index);
      value = obj.val();
      flag = 0;
      if (value !== null) {
        ref = obj.val();
        for (j = 0, len1 = ref.length; j < len1; j++) {
          i = ref[j];
          if (i = condition) {
            flag = 1;
            break;
          }
        }
      }
      if (flag) {
        $("#" + target).css('display', 'block');
      } else {
        $("#" + target).css('display', 'none');
      }
      return obj.on("change", function() {
        var l, len2, ref1;
        flag = 0;
        ref1 = obj.val();
        for (l = 0, len2 = ref1.length; l < len2; l++) {
          i = ref1[l];
          if (i = condition) {
            flag = 1;
            break;
          }
        }
        if (flag) {
          return $("#" + target).css('display', 'block');
        } else {
          return $("#" + target).css('display', 'none');
        }
      });
    }
  };

  Model.prototype.init = function() {
    var a, b, condition, finalhtmlstring, i, index, j, k, len, modeldata, ref, results, target, v;
    modeldata = getdatabyajax("/input/field/" + this.tablename).responseJSON;
    len = modeldata.length;
    for (i = j = 0, ref = len; j < ref; i = j += 1) {
      ergodicdata(modeldata, i, this.inputnames);
    }
    finalhtmlstring = htmlstring;
    $("#" + this.target).append(finalhtmlstring);
    getdbdata(this.tablename, this.editid);
    results = [];
    for (k in reqcontainer) {
      v = reqcontainer[k];
      index = k;
      results.push((function() {
        var results1;
        results1 = [];
        for (a in v) {
          b = v[a];
          condition = b;
          target = a;
          results1.push(reqevent(index, condition, target));
        }
        return results1;
      })());
    }
    return results;
  };

  Model.prototype.savedata = function() {
    var result, that;
    result = getformvalue(this.target, this.inputnames, this.editid);
    that = this;
    return $.post("/input/update/" + this.tablename, result, function(data) {
      alert('保存成功');
      return getdbdata(that.tablename, that.editid);
    });
  };

  return Model;

})();
