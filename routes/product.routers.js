var express = require('express');
var router = express.Router();
var db = require('../db');
var controller = require('../controller/product.controlller');

router.get('/', controller.index);


module.exports = router;