module.exports.postCreate = function(req, res, next) {
    var err = [];

    console.log(req.body);
    if (!req.body.name) {
        err.push('Name is require');
    }
    if (!req.body.phone) {
        err.push('Phone is require');
    }
    if (err.length) {
        res.render('users/create', {
            errs: err,
            values: req.body
        });
        return;
    }
    next();
};