var db = require('../db');

module.exports.addToCart = function(req, res, next) {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    console.log(3);
    if (!sessionId) {
        res.redirect('/product');
        return;
    }
    var count = db.get('sessions')
        .find({ id: sessionId })
        .get('cart.' + productId, 0)

    .value();

    db.get('sessions')
        .find({ id: sessionId })
        .set('cart.' + productId, count + 1)
        .write();

    var dem = db.get("sessions").find({ id: sessionId }).get("cart").size().value();
    console.log('dem: ' + dem);

    res.redirect('/product')
}