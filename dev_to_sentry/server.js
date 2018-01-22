'use strict'
var bodyParser = require('body-parser');
var validator = require('validator');
var db = require('./config/MongoConfig');
var User = require('./model/Users');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

var port = process.env.API_PORT || 3001;  

var session_sec = process.env.SESSION_SEC || 'work_hard';

app.use(session({
    secret: session_sec,
    resave:false,
    saveUninitialized: true,
    cookie: { secure: process.env.SECURE_COOKIE || false },
    store: new MongoStore({
        mongooseConnection: db,
        ttl: 60 * 30
    })
}));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {  
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'); 
    res.setHeader('Cache-Control', 'no-cache'); 
    next();  
});

app.use('/api', require('./routes/routes'));
app.use('/auth', require('./routes/auth'));

app.use((req, res, next) => {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});
