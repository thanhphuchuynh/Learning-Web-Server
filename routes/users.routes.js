var express = require('express');
var router = express.Router();

var db = require('../db');
var controller = require('../controller/users.controller');
const shortid = require('shortid');
var valuedate = require('../valuedate/users.valuedate');
var authMiddiewares = require('../middiewares/auth.middiewares');




router.get('/', controller.index);

router.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send("hello");

    console.log(res.cookie);

});


router.get('/search', controller.search);



router.get('/create', controller.create);
router.post('/create', valuedate.postCreate, controller.postCreate);

router.get('/:id', controller.id)



module.exports = router;