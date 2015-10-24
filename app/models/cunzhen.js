
var tb = require('../../field/cunzhen')
module.exports = function (orm, db) {
  var Comment = db.define('cunzhen', tb.backendfield(),{
    methods: {
      getall: function (cb) {
        return this.all({},{only:["id","CZJBXXCunZhenMingChen" ]},function(err,item){
          cb(item)
        });
      },
      getselectlist: function(cb){
        return this.getall(function(err,item){
          var retdata = {};
          for (var i in item ){
            retdata[item[i].id] = item[i]["CZJBXXCunZhenMingChen"];
          }
          return cb(retdata) ;
        });
      },
      getonebyname: function(name,cb){
        return this.get({"CZJBXXCunZhenMingChen":name},function(err,item){
          if(err) throw err;
          cb(item);
        })
      }

    }
  });
};
