var bodyParser = require('body-parser');
var validator = require('validator');
var User = require('../model/Users');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();
var authRoutes = express.Router();



function validateLoginForm(payload) { 
    const errors = {};
    let isFormValid = true;
    let message = '';
    
    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please enter your email address.';
    }
    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please enter your password';
    }
    if (!isFormValid) {
        message = 'There were errors with logging on';
    }
    
    return {
        success: isFormValid,
        message,
        errors
    };
}

authRoutes.post('/login', (req, res, next) => {
    
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, (error, user) => {
            if (error || !user) {
                var err = new Error('Incorrect email or password');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/Profile');
            }
        });
    } else {
        var err = new Error('All fields are required');
        err.status = 400;
        return next(err);
    }
});



authRoutes.post('/register', (req, res, next) => {
    console.log(req.body);
    
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("Passwords must match");
        return next(err);
    }
    if (req.body.email &&
        req.body.firstName &&
        req.body.lastName &&
        req.body.password &&
        req.body.passwordConf) {
            var userData = {
                email: req.body.email,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                password: req.body.password
            }
            User.findOne({email: userData.email}, (err, obj) => { 
                if (obj) {
                    return res.status(200).json({
                        success: false, 
                        msg: 'An account with that email is already registered'
                    });
                }
                else
                {
                    User.create(userData, (error, user) => {
                        if (error) {
                            return next(error);
                        } else {
                            req.session.userId = user._id;
                            console.log('SESSION ON POST: ' + JSON.stringify(req.session.userId));
                            return res.status(200).json({ 
                                success: true,
                                redirectUrl: '/Profile'
                            });                    
                        }
                    });
                }
            });
            
        } else {
            var err = new Error('Something went wrong'); 
            err.status = 500;
            res.send('Something went wrong');
            return next(err);
        }
    });
    authRoutes.get('/profile', (req, res, next) => {
        console.log('SESSION ON GET: ' + JSON.stringify(req.session));
        User.findById(req.session.userId)
        .exec((error, user) => {
            if (error) {
                return next(error);
            } else {
                if (user === null) { 
                    var err = new Error('Not authorized to view this page');
                    err.status = 401;
                    return next(err);
                } else {
                    console.log(user.first_name + ' ' + user.last_name + ' ' + user.email);
                    return res.status(200).json({ firstName: user.first_name, lastName: user.last_name, email: user.email });
                }
            }
        });
    })
    .get('/logout', (req, res, next) => {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect('/');
                }
            });
        }
    });

    
    module.exports = authRoutes;