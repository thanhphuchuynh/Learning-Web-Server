var db = require('../db');
const shortid = require('shortid');

module.exports.index = function(req, res, next) {
    //res.send('asdasd');
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;
    var start = (page - 1) * perPage;
    var starts = start + 1;
    var end = (page * perPage);
    var length1 = db.get('product').value().length;
    var pageNumber = Math.ceil(length1 / 8);
    var arrayPage = [];
    var i = 0;
    //arrayPage.push(start);
    while (i !== 3 && page !== pageNumber) {
        arrayPage.push(page + i)
        i++;
    }
    console.log(arrayPage);
    res.render('product/product', {
        // products: db.get('product').value()
        // products: db.get('product').value().slice(start, end)
        products: db.get('product').drop(start).take(perPage).value(),
        numbers: arrayPage,
        pageNow: page
    });
}