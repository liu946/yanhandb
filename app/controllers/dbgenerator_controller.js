var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // generator db and table
  req.db.sync(function(err){
    if(err){throw err;}
    res.send("generator db and table");
  })
  
});
module.exports = router;

