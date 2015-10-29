
var tb = require('../../field/kaichangkongjian')
module.exports = function (orm, db) {
  var Comment = db.define('kaichangkongjian', tb.backendfield(),{
    autoFetch: true,
    methods: {

    }
  });
  Comment.getall= function (cb,req) {

      var onlyfield = ["BianHao","id","cunzhen_id" ]
      var itemscopy = [];
      return this.all({},{only:onlyfield},function(err,items){
        for(var i in items ){
          var item = items[i];
          itemscopy.push({})
          for(var j in onlyfield){
            itemscopy[i][onlyfield[j]]=item[onlyfield[j]];
          }
          if(item.cunzhen_id ===null) {
            itemscopy[i]['SuoShuCunZhen'] = null;
          }else {
            itemscopy[i]['SuoShuCunZhen'] = item.cunzhen["CZJBXXCunZhenMingChen"];
          }
        }
        cb(itemscopy);
      });
  }
  Comment.hasOne("cunzhen", db.models['cunzhen']);
};
