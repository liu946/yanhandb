
var tb = require('../../field/tingyuanyujianzhu')
module.exports = function (orm, db) {
    tb.addotherfile(function(){
        var ty =  tb.backendfield()
        var Comment = db.define('tingyuanyujianzhu',ty,{
            methods: {

            }
        });
        Comment.getall= function (cb,req) {
            return this.all({},{only:["JZJBXXMingChen","JZJBXXBianHao","id" ,"cunzhen_id"]},function(err,items){
                var finishflag = 0;
                if(items.length === 0) cb(items);
                for(var i in items ){
                    var item = items[i];
                    var cunzhenid = item.cunzhen_id;
                    req.models.cunzhen.get(cunzhenid,function(err,Cunzhen){
                        if(err) throw  err;
                        finishflag++;
                        item['SuoShuCunZhen'] = (Cunzhen == undefined ? null: Cunzhen["CZJBXXCunZhenMingChen"] );
                        if( finishflag === items.length ){
                            cb(items);
                        }

                    })
                }

            });
        }
        Comment.hasOne("cunzhen", db.models['cunzhen']);
    })
};
