
var tb = require('../../field/jiedaokongjian')
module.exports = function (orm, db) {
  var Comment;
  Comment = db.define('jiedaokongjian', tb.backendfield(), {
    autoFetch: true,
    methods: {},
  });
  Comment.hasOne("cunzhen", db.models['cunzhen']);
  Comment.getall= function (cb,req) {
    return this.find({},{only:["BianHao","id","cunzhen_id" ]},function(err,items){
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

};
