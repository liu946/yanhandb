var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // generator db and table

  res.send("test");
});
module.exports = router;

