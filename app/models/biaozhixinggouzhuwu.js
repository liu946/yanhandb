
var tb = require('../../field/biaozhixinggouzhuwu')
module.exports = function (orm, db) {
  var Comment = db.define('biaozhixinggouzhuwu', tb.backendfield(),{
    autoFetch: true,
    methods: {
    }
  });
  Comment.getall = function (cb,req) {

      var onlyfield = ["id","LeiXing","BianHao" ,"cunzhen_id"];
      var itemscopy = [];
      return this.all({},function(err,items){
        for(var i in items ){
          var item = items[i];
          itemscopy.push({})
          for(var j in onlyfield){
            itemscopy[i][onlyfield[j]]=item[onlyfield[j]];
          }
          if(item.cunzhen_id ===null) {
            itemscopy[i]['SuoShuCunZhen'] = null;
          }else {
            itemscopy[i]['SuoShuCunZhen'] = item.cunzhen["CZJBXXCunZhenMingChen"];
          }
        }
        cb(itemscopy);
      });
  };
  Comment.judgePrint = function(){
    var fields = tb.judgePrint();
    return fields;
  };
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
