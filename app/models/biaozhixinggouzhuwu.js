
var tb = require('../../field/biaozhixinggouzhuwu')
module.exports = function (orm, db) {
  var Comment = db.define('biaozhixinggouzhuwu', tb.backendfield(),{
    methods: {
      getall: function (cb) {
        return this.all({},{only:["id","LeiXing" ]},function(err,item){
          item.getCunzhen(cunzhen,function(err){
            item['parent'] = {id: cunzhen.id ,namezh: cunzhen["CZJBXXCunZhenMingChen"] };
            cb(item)
          });
        });

      }
    }
  });
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
