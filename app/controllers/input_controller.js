var express = require('express');

var fs = require('fs');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('ok');
  //res.render('input', { title: '严寒地区村镇绿色建筑体系发展目标基础与应用数据录入系统' });
});

router.get('/get/:tablename', function(req, res, next) {
    var m = req.models[req.params.tablename];
    m.getall(function(row){
      res.json(row);
    },req);
});


router.get('/field/:tablename',function (req, res, next) {
  fs.readdir(path.join(__dirname,'../../field'),function (err, data) {
    if ( 0 <= data.indexOf(req.params.tablename +'.js')) {
      var datajson = require('../../field/'+req.params.tablename).originfield();
      if(req.params.tablename == "cunzhen" ){res.json(datajson);return;}
      req.models.cunzhen.getselectlist(function (optionobj) {
        datajson.push({
          namezh:"所属村镇",
          name:"SuoShuCunZhen",
          backend:{type:"text",size:100},
          forend:{
            type:'select',
            option:optionobj,
          },
        });
        res.json(datajson);
        datajson.pop();
      })

    }else{
      res.send("Don't find table '"+req.params.tablename+"'")
    }
  })
});

router.post('/update/:tablename/',function(req ,res ,next){
  req.models[req.params.tablename].get(req.body.id,function(err,item) {
    for (var i in req.body) {
      if(i in item ) item[i] = req.body[i];
    };

    item.save(function (err) {
      if(err)throw err;
      res.send('save OK!')
    })
    // save relations
    if(req.params.tablename != "cunzhen" ){
      req.models.cunzhen.getonebyname(req.body["SuoShuCunZhen"],function(cunzhen){
        item.setCunzhen(cunzhen, function (err) {
          if(err)throw err;
        })
      })
    }
  })
});

router.get('/view/:viewname',function(req ,res ,next){
  res.render(req.params.viewname)
});
router.get('/view/:viewname/:id',function(req ,res ,next){
  res.render(req.params.viewname,{id:req.params.id});
});

router.get('/new/:tablename',function(req ,res ,next){
  req.models[req.params.tablename].create([{}],function (err,items) {
    // todo
    res.redirect('/input/view/'+req.params.tablename+"/"+items[0]['id']);
  });
});

router.get('/get/:tablename/:id',function(req ,res ,next){
  req.models[req.params.tablename].get(req.params.id,function(err,item){
    if(err)throw err;
    res.json(item);
  })
});

router.get('/creat/:tablename/:id',function(req,res,next){
  req.models[req.params.tablename].get(req.params.id,function(err,item){
    if(err)throw err;
    var newitem = {};
    for(var i in item){
      if(i != "id") newitem[i] = item[i];
    }
    req.models[req.params.tablename].create([newitem],function(err,items){
      if(err)throw err;
      res.redirect('/input/view/'+req.params.tablename+"/"+items[0]['id'])
    })
  })
})
module.exports = router;

