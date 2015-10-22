var express = require('express');

var fs = require('fs');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('ok');
  //res.render('input', { title: '严寒地区村镇绿色建筑体系发展目标基础与应用数据录入系统' });
});

router.get('/get/:tablename', function(req, res, next) {
    req.models[req.param.tablename].getall(function(row){
      res.json(row);
    });
});


router.get('/field/:tablename',function (req, res, next) {
  fs.readdir(path.join(__dirname,'../../field'),function (err, data) {
    if ( 0 <= data.indexOf(req.params.tablename +'.js')) {
      res.json(require('../../field/'+req.params.tablename).originfield());
    }else{
      res.send("Don't find table '"+req.params.tablename+"'")
    }
  })
});

router.post('/update/:tablename/',function(req ,res ,next){
  req.models[req.param.tablename].get(req.body.id,function(err,item) {
    for (var i in req.body) {
      item[i] = req.body[i];
    };
    item.save(function (err) {
      if(err)throw err;
      res.send('save OK!')
    })
  })
});

router.get('/view/:viewname',function(req ,res ,next){
  res.render(req.params.viewname)
});

router.get('/new/:tablename',function(req ,res ,next){
  req.models[req.param.tablename].create([{}],function (err,items) {
    // todo
    res.redirect('view/edit');//'+req.param.tablename+"/"+items['id']);
  });
});

router.get('/get/:tablename/:id',function(req ,res ,next){
  req.models[req.param.tablename].get(req.params.id,function(err,item){
    if(err)throw err;
    res.json(item);
  })
});
module.exports = router;

