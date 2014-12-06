/**
 * SessionController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */


module.exports = {

	'new': function(req, res) {
		res.view('school/start');
		
	},

	create: function(req, res, next) {

		// Check for email and password in params sent via the form, if none
		// redirect the browser back to the sign-in form.
		if (!req.param('username') || !req.param('password')) {
			// return next({err: ["Password doesn't match password confirmation."]});

			var usernamePasswordRequiredError = [{
				name: 'usernamePasswordRequired',
				message: 'You must enter both a username and password.'
			}]

			// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
			// the key of usernamePasswordRequiredError
			req.session.flash = {
				err: usernamePasswordRequiredError
			}

			//res.view('/school/start');
			res.redirect('/');
			return;
		}

		// Try to find the user by there email address. 
		// findOneByEmail() is a dynamic finder in that it searches the model by a particular attribute.
		// User.findOneByEmail(req.param('email')).done(function(err, user) {
		User.findOneByUsername(req.param('username'), function foundUser(err, user) {
			if (err) return next(err);

			// If no user is found...
			if (!user) {
				console.log("no user");
				var noAccountError = [{
					name: 'noAccount',
					message: 'The email address ' + req.param('username') + ' not found.'
				}]
				req.session.flash = {
					err: noAccountError
				}
				res.redirect('/');
				return;
			}
			//console.log("user found", user);

			if(req.param('password')== user.password){
				req.session.authenticated = true;
				req.session.User = user;
				
				res.view('school/index');
				return;

			}

			
				// If the password from the form doesn't match the password from the database...
			else {
					var usernamePasswordMismatchError = [{
						name: 'usernamePasswordMismatch',
						message: 'Invalid username and password combination.'
					}]
					req.session.flash = {
						err: usernamePasswordMismatchError
					}
					res.redirect('/');
					return;
				}
			});
		
	},

	destroy: function(req, res, next) {

				// Wipe out the session (log out)
				req.session.destroy();

				// Redirect the browser to the sign-in screen
				res.redirect('/session/new');
				return;
			}
};