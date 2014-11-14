/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	finduser : function(req,res, next){

		if(!(req.param('username')) || !(req.param('password')))
		{
			var noEmailPassword = [{name: 'noEmailPassword' , message : 'Either email id or password are not entered'}];
			req.session.flash = {
				err: noEmailPassword
			}
			res.view('school/start');
		}

       
		User.findOneByUsername(req.param('username') , function foundUser(err, user ) {
		  console.log(req.param('username'));
		  //console.log(err);
			if(!user){
			var noUser = [{name: 'noUserAccount' , message : 'there is no User for this mail id ' +
						req.param('username')
						} ];
			req.session.flash = {
				err: noUser}
			
			res.view('school/start');
		  }
		  else{
		  	if(user.admin){
		  		if(req.param('password') == user.password){
		  			console.log('now redirecting to index page');
		  			res.view('school/index');
		  		}
		  		else{
		  			var noPassword = [{name: 'noEmailPassword' , message : 'Either email id or password are not entered'}];
					req.session.flash = {
					err: noEmailPassword
					}
					res.view('school/start');

		  		}
		  	}
		  	else{
		  	res.view('school/index');
		  }
		  }

	});
},
};

