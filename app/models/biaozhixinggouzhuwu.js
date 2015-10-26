
var tb = require('../../field/biaozhixinggouzhuwu')
module.exports = function (orm, db) {
  var Comment = db.define('biaozhixinggouzhuwu', tb.backendfield(),{
    autoFetch: true,
    methods: {
    }
  });
  Comment.getall = function (cb,req) {
    return this.all({},{only:["id","LeiXing" ,"cunzhen_id"]},function(err,items){
      for(var i in items ){
        var item = items[i];

        if(item.cunzhen_id === null ){
          item['SuoShuCunZhen'] = null;
        }else{
          item['SuoShuCunZhen'] =item.cunzhen["CZJBXXCunZhenMingChen"];
        }
      }
      cb(items);
    });
  };
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
