
var tb = require('../../field/kaichangkongjian')
module.exports = function (orm, db) {
  var Comment = db.define('kaichangkongjian', tb.backendfield(),{
    methods: {

    }
  });
  Comment.getall= function (cb) {
    return this.all({},{only:["BianHao","id","cunzhen_id" ]},function(err,items){
      var finishflag = 0;
      if(items.length === 0) cb(items);
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
  }
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
