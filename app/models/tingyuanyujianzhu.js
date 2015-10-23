
var tb = require('../../field/tingyuanyujianzhu')
module.exports = function (orm, db) {
    tb.addotherfile(function(){
        var ty =  tb.backendfield()
        var Comment = db.define('tingyuanyujianzhu',ty,{
            methods: {
                getall: function (cb) {
                    return this.all({},{only:["JZJBXXMingChen","JZJBXXBianHao","id" ]},function(err,item){
                        item.getCunzhen(cunzhen,function(err){
                            item['parent'] = {id: cunzhen.id ,namezh: cunzhen["CZJBXXCunZhenMingChen"] };
                            cb(item)
                        });
                    });
                }
            }
        });
        Comment.hasOne("cunzhen", db.models['cunzhen']);
    })
};
