


var express = require('express');
var router = express.Router();
var db = require('../field/db')
/* GET home page. */
router.get('/', function(req, res, next) {


	
  	res.send('OK');
});

module.exports = router;