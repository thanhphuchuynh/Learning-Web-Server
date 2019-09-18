require('dotenv').config();
// /console.log(process.env.SESSION_SECRET);

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var userRoutes = require('./routes/users.routes');
var cookieParser = require('cookie-parser');
var authRoutes = require('./routes/auth.routes');
var authMiddiewares = require('./middiewares/auth.middiewares');
var product = require('./routes/product.routers');
var cartRoutes = require('./routes/cart.routers');
var sessionMiddiewares = require('./middiewares/session.middiewares');



const app = express();

const port = 3000;
var key;
app.set('view engine', 'pug');
app.set('views', './views');



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET));

console.log("0");
app.use(sessionMiddiewares);
// app.use(function(req, res, next) {
//     console.log('time: ' + Date.now())
//     next();
// })
console.log("1");

app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('index', {
        name: 'AAA'
    });
});
app.use('/users', authMiddiewares.requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.use('/product', product);
app.use('/cart', cartRoutes);

app.listen(port, function() {
    console.log('Server Listening on port ' + port);

});