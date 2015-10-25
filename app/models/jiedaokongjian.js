
var tb = require('../../field/jiedaokongjian')
module.exports = function (orm, db) {
  var Comment;
  Comment = db.define('jiedaokongjian', tb.backendfield(), {
    methods: {},
  });
  Comment.hasOne("cunzhen", db.models['cunzhen']);
  Comment.getall= function (cb,req) {
    return this.find({},{only:["BianHao","id","cunzhen_id" ]},function(err,items){
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
  }

};
