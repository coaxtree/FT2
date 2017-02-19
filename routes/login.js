var express = require('express');
var router = express.Router();
var passport = require('passport');
//var controllers = require('.././controllers');
var AuthMiddleware = require('.././settings/authentication/login.auth');

router.get('/', function(req, res, next) {
  res.render('index');
});

//routas de usuario
//router.get('/auth/signup', controllers.UserController.getSignUp);

 router.post('/auth/signup', passport.authenticate('local-signup'),function(req, res){
        res.json(req.user);
    });
//router.get('/auth/signin', controllers.UserController.getSignIn);

router.post('/auth/login', passport.authenticate('local-login'),function(req, res){
        res.json(req.user);
    });

//router.get('/auth/logout', controllers.UserController.logout);
//router.get('/users/panel', AuthMiddleware.isLogged ,controllers.UserController.getUserPanel);

module.exports = router;
