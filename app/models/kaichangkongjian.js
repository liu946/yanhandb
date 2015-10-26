
var tb = require('../../field/kaichangkongjian')
module.exports = function (orm, db) {
  var Comment = db.define('kaichangkongjian', tb.backendfield(),{
    autoFetch: true,
    methods: {

    }
  });
  Comment.getall= function (cb,req) {
    return this.all({},{only:["BianHao","id","cunzhen_id" ]},function(err,items){
      for(var i in items ){
        var item = items[i];
        if(item.cunzhen_id ===null) {
          item['SuoShuCunZhen'] = null;
        }else{
          item['SuoShuCunZhen'] =item.cunzhen["CZJBXXCunZhenMingChen"];
        }

      }
      cb(items);
    });
  }
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
