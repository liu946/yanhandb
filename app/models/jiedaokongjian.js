
var tb = require('../../field/jiedaokongjian')
module.exports = function (orm, db) {
  var Comment = db.define('jiedaokongjian', tb.backendfield(),{
    methods: {

    }
  });
  Comment.getall= function (cb) {
    return this.all({},{only:["BianHao","id" ]},function(err,item){
      item.getCunzhen(cunzhen,function(err){
        item['parent'] = {id: cunzhen.id ,namezh: cunzhen["CZJBXXCunZhenMingChen"] };
        cb(item)
      });
    });
  }
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
