/**
 * Created by liu on 15/12/6.
 */
var express = require('express');

var fs = require('fs');
var path = require('path');
var judge = require('../../judgement');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('ok');
});

router.get('/get/:tablename', function(req, res, next) {
  var m = req.models[req.params.tablename];
  m.getall(function(row){
    res.json(row);
  },req);
});


router.get('/onlyfieldNames/:tablename',function(req,res,next){
  var m = req.models[req.params.tablename];
  res.json(m.judgePrint());
})
router.get('/analyzelist',function(req,res,next){
  res.render('analyzelist');
})

router.get('/analyze/:cunzhenid', function (req, res, next) {
  var globalRemark = {};
  var id = req.params.cunzhenid;
  var analyzeArray = {
    cunzhen:[],
    kaichangkongjian:[],
    jiedaokongjian:[],
    biaozhixinggouzhuwu:[],
    tingyuanyujianzhu:[],
  };
  req.models.cunzhen.get(id,function(err,item){
    if(err)throw err;
    judge.addOne(item,'cunzhen',analyzeArray.cunzhen,globalRemark);
    var addingList = ['kaichangkongjian','jiedaokongjian'];
    (function reduceAddingTables (addinglist) {
      if(addinglist.length){
        var m = addinglist.pop();
        req.models[m].all({cunzhen_id:id}, function (err, items) {
          if(err)throw err;
          for(var i in items){
            judge.addOne(items[i],m,analyzeArray[m],globalRemark);
          }
          reduceAddingTables(addinglist);
        });
      }else{
        //res.json(analyzeArray);
        res.render('analyze',analyzeArray);
      }
    })(addingList);
  });
});

module.exports = router;