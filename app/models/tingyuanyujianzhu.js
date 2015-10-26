
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
            return this.all({},{only:["JZJBXXMingChen","JZJBXXBianHao","id" ,"cunzhen_id"]},function(err,items){
                for(var i in items ){
                    var item = items[i];
                    if(item.cunzhen_id ===null) {
                        item['SuoShuCunZhen'] = null;
                    }else{
                        item['SuoShuCunZhen'] =item.cunzhen["CZJBXXCunZhenMingChen"];
                    }
                    
                }
                cb(items);
            });
        }
        Comment.hasOne("cunzhen", db.models['cunzhen']);
    })
};
