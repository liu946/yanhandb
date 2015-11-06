
var tb = require('../../field/tingyuanyujianzhu')
module.exports = function (orm, db) {
    tb.addotherfile(function(){
        var ty =  tb.backendfield()
        var Comment = db.define('tingyuanyujianzhu',ty,{
            autoFetch: true,
            methods: {

            }
        });
        Comment.getall= function (cb,req) {
            var onlyfield = ["JZJBXXMingChen","JZJBXXBianHao","id" ,"cunzhen_id"];
            var itemscopy = [];
            return this.all({},function(err,items){
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
    })
};
