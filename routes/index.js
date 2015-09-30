/** 
 * Filename: index.js
 * Date: 2015/09/19 (CST)
 * Author: Michael Liu (HIT)
 * Copyright (c) 2015 liu. All rights reserved.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '严寒地区村镇绿色建筑体系发展目标基础与应用数据录入系统' });
});

module.exports = router;
