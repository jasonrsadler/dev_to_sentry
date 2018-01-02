'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./model/Users');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

var mongoDB = 'mongodb://127.0.0.1:27017/dsentrdb';
mongoose.connect(mongoDB, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API Initialized'});
});

router.route('/users')
.get(function(req, res) {
    User.find(function(err, users) {
        if (err) { res.send(err);}
        res.json(users);
    });
})
.post(function(req, res) {
    var user = new User();
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;
    user.passwordConf = req.body.passwordConf;
    user.save(function(err) {
        if (err) { res.send(err); }
        res.json({message: 'User added' });
    });
});

app.use('/api', router);
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});