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
				var insertSql = "INSERT INTO User_Create_Account SET ?";
				var insertValues = {
					"Your_Name": reqObj.yourName,
					"Family_Name": reqObj.familyName,
					"Email_ID": reqObj.email,
					"Password": reqObj.password,
					"Confirm_Password": reqObj.confirmPassword
				};
				var query = conn.query(insertSql, insertValues, function (err, result) {
					if (err) {
						console.error('SQL error: ', err);
						return next(err);
					}
					console.log(result);
					var User_Id = result.insertId;
					res.json({ "UserID": User_Id });
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
    	/*var family = req.param('family');
  		var passwrd = req.param('passwrd');*/
		var query = url.parse(req.url, true).query;
		console.log(query);
		//var yourName = query.yourName
		var familyName = query.familyName;
		var email = query.email;
		var password = query.password;
		console.log(familyName);
		console.log(email);
		console.log(password);
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