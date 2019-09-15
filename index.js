require('dotenv').config();
// /console.log(process.env.SESSION_SECRET);

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var userRoutes = require('./routes/users.routes');
var cookieParser = require('cookie-parser');
var authRoutes = require('./routes/auth.routes');
var authMiddiewares = require('./middiewares/auth.middiewares');

const app = express();

const port = 3000;
var key;
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index', {
        name: 'AAA'
    });
});
app.use('/users', authMiddiewares.requireAuth, userRoutes);
app.use('/auth', authRoutes);


app.listen(port, function() {
    console.log('Server Listening on port ' + port);
});