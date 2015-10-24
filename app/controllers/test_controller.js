var express = require('express');
var router = express.Router();

var test = {
  "insertAndSetRelation" : function(req, res, next) {
    // generator db and table
    req.models.cunzhen.create({CZJBXXCunZhenMingChen:"testcunzhenname"}, function (err,item) {
      if (err) throw err;
      req.models.jiedaokongjian.create({}, function (err,childitem) {
        childitem.setCunzhen(item, function (err) {
          if (err) throw err;
          res.send("insert and set relation [OK] ");
        });
      });
    })
  }
}
var testurllist = [];
for(var i in test){
  router.get('/'+i,test[i]);
  testurllist.push(i);
}

router.get('/', function(req, res, next) {
  // generator db and table

  res.render('test',{testlist:testurllist})
});


module.exports = router;

