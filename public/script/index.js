// Generated by CoffeeScript 1.9.3
var List;

List = (function() {
  var addlist, getdatabyajax;

  function List(tablename1) {
    this.tablename = tablename1;
  }

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

  addlist = function(data, tablename) {
    var d, html, i, len;
    html = '';
    for (i = 0, len = data.length; i < len; i++) {
      d = data[i];
      html += "<div class='container'>";
      if (tablename === 'cunzhen') {
        html += "<div class='title'><p>" + d.CZJBXXCunZhenMingChen + "</p></div>";
      } else if (tablename === 'biaozhixinggouzhuwu') {
        html += "<div class='title'><p>" + d.SuoShuCunZhen + "</p></div> <div class='title'><p>" + d.LeiXing + "</p></div>";
      } else if (tablename === 'jiedaokongjian') {
        html += "<div class='title'><p>" + d.BianHao + "</p></div> <div class='title'><p>" + d.SuoShuCunZhen + "</p></div>";
      } else if (tablename === 'kaichangkongjian') {
        html += "<div class='title'><p>" + d.BianHao + "</p></div> <div class='title'><p>" + d.SuoShuCunZhen + "</p></div>";
      } else if (tablename === 'tingyuanyujianzhu') {
        html += "<div class='title'><p>" + d.SuoShuCunZhen + "</p></div>";
      } else {

      }
      html += "<div class='exchange'><a href='/input/view/" + tablename + "/" + d.id + "'>修改</a></div></div>";
    }
    return $('#formlist .contentlist').append(html);
  };

  List.prototype.init = function() {
    var data;
    data = getdatabyajax("/input/get/" + this.tablename).responseJSON;
    return addlist(data, this.tablename);
  };

  List.prototype.add = function() {
    return location.href = "/input/new/" + this.tablename;
  };

  return List;

})();
