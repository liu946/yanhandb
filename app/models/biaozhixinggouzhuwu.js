
var tb = require('../../field/biaozhixinggouzhuwu')
module.exports = function (orm, db) {
  var Comment = db.define('biaozhixinggouzhuwu', tb.backendfield(),{
    methods: {

    }
  });
  Comment.getall = function (cb) {
    return this.all({},{only:["id","LeiXing" ]},function(err,items){
      for(var i in items ){
        var item = items[i];
        item.getCunzhen(function(err,cunzhen){
          item['SuoShuCunZhen'] = (cunzhen == undefined ? null: cunzhen["CZJBXXCunZhenMingChen"] );
        });
      }
      cb(items)
    });
  };
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
