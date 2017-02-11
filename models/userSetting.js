var express = require('express');
var mysql = require('mysql');
var connection = require("express-myconnection");

var dbconfig = express()
/*var userSchema = connection.database ({
	local: {
        familyName: String,
				email: String,
				password: String
	}
});*/
dbconfig.connect(function(error) {

connection.query('SELECT Family_Name, Email_ID, Password FROM joinfamily.user_setting', function(err, rows, fields) {

        local.familyName = String;
				local.email = String;
				local.password= String;
	
})

});
module.exports = mysql.model('User', dbconfig);