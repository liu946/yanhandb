
var tb = require('../../field/cunzhen')
module.exports = function (orm, db) {
  var Comment = db.define('cunzhen', tb.backendfield(),{
    methods: {
    }
  });
  Comment.getall = function (cb) {
    return this.all({},{only:["id","CZJBXXCunZhenMingChen" ]},function(err,item){
      cb(item)
    });
  };
  Comment.getselectlist= function(cb){
    return this.getall(function(item){
      var retdata = {};
      for (var i in item ){
        retdata[item[i].id] = item[i]["CZJBXXCunZhenMingChen"];
      }
      return cb(retdata) ;
    });
  };
  Comment.getonebyname= function(name,cb){
    return this.get({"CZJBXXCunZhenMingChen":name},function(err,item){
      if(err) throw err;
      cb(item);
    })
  }
};
