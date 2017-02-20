
// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
//var bcrypt = require('bcryptjs');
var dbconfig = require('../.././settings/database');
var connection = mysql.createConnection(dbconfig.connection);

//connection.query('USE ' + dbconfig.database);
// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(obj, done){
		done(null, obj);
	});

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-signup',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            connection.query("SELECT * FROM LoginDetails WHERE email_id = ?",[email], function(err, rows) {
                if (err)
                    return done(err);
                if (rows.length) {
                   // return done(null, false, req.flash('authmessage', 'That email id is already taken.'));
                    return done(err);
                } else {
                    // if there is no user with that username
                    // create the user
                    var user = {
						name : req.body.yourName,
						family_name : req.body.familyName,
						email_id : req.body.email,
                        password: bcrypt.hashSync(req.body.password, null, null)  // <us></us>e the generateHash function in our user model
                    };

                   // var insertQuery = "INSERT INTO mysqltest ( username, password ) values (?,?)";

                    connection.query('INSERT INTO LoginDetails SET ?', user ,function(err, rows) {
                        user.id = rows.insertId;

                        return done(null, user);
                    });
                }
            });
        })
    );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            connection.query("SELECT * FROM LoginDetails WHERE email_id = ?",[email], function(err, rows){
				 if (err)
                    return done(err);
                if (!rows.length) {
                   // return done(null, false, req.flash('authmessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                    return done(err);
                }

                // if the user is found but the password is wrong
                var user = rows[0];
                if (!bcrypt.compareSync(password, user.password))
                   // return done(null, false, req.flash('authmessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                    return done(err);

                // all is well, return successful user
               return done(null, {
						//user_id: user.id, 
						name : user.name,
						family_name : user.family_name,
					//	email_id : user.email_id
					});
            });
        })
    );
};
