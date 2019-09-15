var express = require('express');
var router = express.Router();

var db = require('../db');
var controller = require('../controller/auth.controller');




router.get('/', controller.index);
router.get('/login', controller.login);
router.post('/login', controller.postLogin);





module.exports = router;