
var tb = require('../../field/biaozhixinggouzhuwu')
module.exports = function (orm, db) {
  var Comment = db.define('biaozhixinggouzhuwu', tb.backendfield(),{
    methods: {

    }
  });
  Comment.getall = function (cb) {
    return this.all({},{only:["id","LeiXing" ,"cunzhen_id"]},function(err,items){
      var finishflag = 0;
      for(var i in items ){
        var item = items[i];
        var cunzhenid = item.cunzhen_id;
        req.models.cunzhen.get(cunzhenid,function(err,Cunzhen){
          if(err) throw  err;
          finishflag++;
          item['SuoShuCunZhen'] = (Cunzhen == undefined ? null: Cunzhen["CZJBXXCunZhenMingChen"] );
          if( finishflag === items.length ){
            cb(items);
          }

        })
      }
    });
  };
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
