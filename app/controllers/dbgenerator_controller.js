var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // generator db and table
  req.db.sync(function(err){
    if(err){throw err;}
    res.send("generator db and table");
  })
  
});

router.get('/drop', function(req, res, next) {
  // generator db and table
  req.db.drop(function(err){
    if(err){throw err;}
    res.send("Grop table");
  })

});
module.exports = router;

