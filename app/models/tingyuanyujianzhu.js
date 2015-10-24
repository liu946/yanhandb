
var tb = require('../../field/tingyuanyujianzhu')
module.exports = function (orm, db) {
    tb.addotherfile(function(){
        var ty =  tb.backendfield()
        var Comment = db.define('tingyuanyujianzhu',ty,{
            methods: {

            }
        });
        Comment.getall= function (cb) {
            return this.all({},{only:["JZJBXXMingChen","JZJBXXBianHao","id" ]},function(err,items){
                for(var i in items ){
                    var item = items[i];
                    item.getCunzhen(function(err,cunzhen){
                        item['SuoShuCunZhen'] = (cunzhen == undefined ? null: cunzhen["CZJBXXCunZhenMingChen"] );
                    });
                }
                cb(items)

            });
        }
        Comment.hasOne("cunzhen", db.models['cunzhen']);
    })
};
