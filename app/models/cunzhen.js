
var tb = require('../../field/cunzhen');
var judge = require('../../judgement/cunzhen');
module.exports = function (orm, db) {
  var Comment = db.define('cunzhen', tb.backendfield(),{
    methods: {
    }
  });
  Comment.judgePrint = function(){
    var fields = tb.judgePrint();
    return fields;
  };
  Comment.judgement = function (fieldName){

    return judge[fieldName];
  };

  Comment.getall = function (cb) {
    var onlyfield = ["id","CZJBXXCunZhenMingChen","CZJBXXSuoShuZhenYu" ];
    var itemscopy = [];
    return this.all({},function(err,items){
      for(var i in items ){
        var item = items[i];
        itemscopy.push({})
        for(var j in onlyfield){
          itemscopy[i][onlyfield[j]]=item[onlyfield[j]];
        }
      }
      cb(itemscopy);
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
    return this.find({"CZJBXXCunZhenMingChen":name},function(err,items){
      if(err) throw err;
      cb(items[0]);
    })
  }
};
