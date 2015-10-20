
var tb = require('../../field/cunzhen')
module.exports = function (orm, db) {
  var Comment = db.define('cunzhen', tb.backendfield(),{
    methods: {
      getall: function (cb) {
        return this.all({},{only:["id","CZJBXXCunZhenMingChen" ]},function(err,item){
          cb(item)
        });
      }
    }
  });
};
