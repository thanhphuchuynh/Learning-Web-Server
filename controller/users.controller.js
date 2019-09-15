var db = require('../db');
const shortid = require('shortid');
module.exports.index = (req, res) => {
    // res.send('user list');
    res.render('users/index', {
        // users: users
        users: db.get('users').value()
    });
    // res.sendFile(path.join(__dirname + "/script.js"));
}

module.exports.search = (req, res) => {
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter((user) => {
        // return user.name.indexOf(q) !== -1;
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    console.log(req.query);
    // sessionStorage.setItem('key', req.query.q);
    res.render('users/index', {
        users: matchedUsers
    })
}
module.exports.create = (req, res) => {
    console.log(req.cookies);
    console.log("aaaa");
    res.render('users/create');
}


module.exports.postCreate = function(req, res) {


    req.body.id = shortid.generate();

    // var err = [];
    // console.log(req.body);
    // if (!req.body.name) {
    //     err.push('Name is require');
    // }
    // if (!req.body.phone) {
    //     err.push('Phone is require');
    // }
    // if (err.length) {
    //     res.render('users/create', {
    //         errs: err,
    //         values: req.body
    //     });
    //     return;
    // }

    db.get('users').push(req.body).write();
    res.redirect('/users');
}
module.exports.id = (req, res) => {
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();

    res.render('users/view', {
        users: user
    })

}