
var tb = require('../../field/jiedaokongjian')
module.exports = function (orm, db) {
  var Comment = db.define('jiedaokongjian', tb.backendfield(),{
    methods: {

    }
  });
  Comment.hasOne("cunzhen", db.models['cunzhen']);
  Comment.getall= function (cb) {
    return this.all({},{only:["BianHao","id" ]},function(err,items){
      for(var i in items ){
        var item = items[i];
        item.getCunzhen(function(err,Cunzhen){
          item['SuoShuCunZhen'] = (Cunzhen == undefined ? null: Cunzhen["CZJBXXCunZhenMingChen"] );

        });
      }
      cb(items)
    });
  }

};
