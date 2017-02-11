var mysql   = require("mysql");
var url = require('url');

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

    REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;

    // Create Account
router.post('/signup', function (req, res, next) {
	try {
        var reqObj = req.body;
        console.log(reqObj);
		var query = "INSERT INTO joinfamily.user_account SET ?";
            var insertValues = {
					"Family_Name": reqObj.familyName,
					"Name": reqObj.yourName,
					"Email_Id": reqObj.email,
				//	"Mobile_No": reqObj.mobNo,
					"Password": reqObj.password,
					"Confirm_Password": reqObj.confirmPassword
				};
       //var table = ["joinfamily.user_test","Name","Family_Name",req.body.yourName,req.body.familyName];
        query = mysql.format(query,insertValues);
        connection.query(query, function (err, rows) {
					if (err) {
						console.error('SQL error: ', err);
						return next(err);
                        res.json({"Error" : true, "Message" : "Error executing MySQL query"});
					} else {
				    	console.log(rows);
				    	var User_Id = rows.insertId;
				    	res.json({ "Name": reqObj.yourName });
                        //res.json({ "User_Id": reqObj.User_Id });
                       // res.json({"Error" : false, "Message" : "User Added !"});
                    }
				});
    
       } catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
    });

//get account details
    router.get('/login', function (req, res, next) {
	try {
    	/*var family = req.param('family');
  		var passwrd = req.param('passwrd');*/
		/*var query = url.parse(req.url, true).query;
		console.log(query);*/
		//var yourName = query.yourName
        var query = "SELECT * FROM ?? where ?? = ? and ?? =? and ?? = ?";
        var table = ["joinfamily.user_setting","Family_Name",req.params.family,"Email_ID",req.params.email, "Password",req.params.passwrd];
        query = mysql.format(query,table);		
       // var rows = [];       
        connection.query(query,function(err,row){          
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
              // res.json({"Error" : false, "Message" : "Success", "Users" : rows});
              var resFam = [];
						for (var famIndex in row) {
							var famObj = rows[famIndex];
							resFam.push(famObj);
						}
						res.json({"Error" : false, "Message" : "Success", "Users" : resFam});
                        console.log(resFam)
           }
        });
    
       } catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
    });
 
}

module.exports = REST_ROUTER;
