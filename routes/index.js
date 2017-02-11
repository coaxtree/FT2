var express = require('express');
var router = express.Router();
var url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//router.use('/login.db', require('./login.db'));

module.exports = router;