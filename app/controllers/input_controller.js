var express = require('express');

var fs = require('fs')
var path = require('path')

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('ok');
  //res.render('input', { title: '严寒地区村镇绿色建筑体系发展目标基础与应用数据录入系统' });
});

router.get('/get', function(req, res, next) {
    table.getall('id,CunZhenJiBenXinXiCunZhenMingChen',function(row){
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
})

router.post('/update',function(req ,res ,next){
  table.update(req.body.id,req.body,function () {
    res.send('save OK');
  });
  
})

router.get('/edit/:id',function(req ,res ,next){
  res.render('edit',{ id: req.params.id})
})

router.get('/new',function(req ,res ,next){
  table.insertnull(function (id) {
    res.redirect('edit/'+id);
  })
})

router.get('/get/:id',function(req ,res ,next){
  table.getitem(req.params.id,function(item){
    res.json(item);
  })
})
module.exports = router;

