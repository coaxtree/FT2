var express = require('express');
var router = express.Router();
var url = require('url');
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index');
});

/*router.get('/login.db', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});*/

// Create Account
router.post('/team/RESTAPI/signup', function (req, res, next) {
	try {
		var reqObj = req.body;
		console.log(reqObj);
		req.getConnection(function (err, conn) {
			if (err) {
				console.error('SQL Connection error: ', err);
				return next(err);
			}
			else {
				var insertSql = "INSERT INTO tree_signup SET ?";
				var insertValues = {
					"Node_Name": reqObj.yourName,
					"Family_Name": reqObj.familyName,
					"Node_MailId": reqObj.email,
					"Node_Password": reqObj.password,
					"Node_ConfirmPassword": reqObj.confirmPassword
				};
				var query = conn.query(insertSql, insertValues, function (err, result) {
					if (err) {
						console.error('SQL error: ', err);
						return next(err);
					}
					console.log(result);
					var User_Id = result.insertId;
					res.json({ "yourName": reqObj.yourName });
				});
			}
		});
	}
	catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
});

//Get Account details
router.get('/team/RESTAPI/login', function (req, res, next) {
	try {
    	var familyName = req.param('familyName');
		var email = req.param('email');
  		var password = req.param('password');
		var reqObj = req.body;
		console.log(reqObj);
		//var query = url.parse(req.url, true).query;
		//console.log(query);
	/*	//var yourName = query.yourName
		var familyName = reqObj.familyName;
		var email = reqObj.email;
		var password = reqObj.password;
		console.log(familyName);
		console.log(email);
		console.log(password);*/
		req.getConnection(function (err, conn) {
			if (err) {
				console.error('SQL Connection error: ', err);
				return next(err);
			} else {
				conn.query('SELECT Family_Name, Email_ID, Password FROM joinfamily.user_setting where Family_Name = ? and Email_ID = ? and Password = ?',
					[familyName, email, password], function (err, rows, fields) {
						if (err) {
							console.error('SQL error: ', err);
							return next(err);
						}
						var resFam = [];
						for (var famIndex in rows) {
							var famObj = rows[famIndex];
							resFam.push(famObj);
						}
						res.json(resFam);
					});
			}
		});
	} catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
});



module.exports = router;