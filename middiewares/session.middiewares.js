var shortid = require('shortid');
var db = require('../db');


module.exports = function(req, res, next) {
    console.log(!req.signedCookies.sessionId);
    if (!req.signedCookies.sessionId) {
        var sessionId = shortid.generate();

        res.cookie('sessionId', sessionId, {
            signed: true
        });
        //  console.log(sessionId);
        //  return;
        // db.get('sessions').push({
        //     id: sessionId
        // }).write();

        // db.get('sessions')
        //     .push({ id: sessionId })
        //     .write();
    }
    next();
}