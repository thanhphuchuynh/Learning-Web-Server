var db = require('../db');
var md5 = require('md5');


module.exports.login = (req, res) => {
    // res.send('user list');
    res.render('auth/login');
    // res.sendFile(path.join(__dirname + "/script.js"));
}
module.exports.index = (req, res) => {
    res.render('auth/index');
}
module.exports.postLogin = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({ email: email }).value();
    if (!user) {
        res.render('auth/login', {
            errs: [
                'User does not exist'
            ]
        });
        return;
    }

    if (md5(password) !== user.password) {
        res.render('auth/login', {
            errs: [
                'Wrong password'
            ]
        });
        return;
    }
    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/users');
}