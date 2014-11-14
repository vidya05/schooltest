/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  'new': function(req, res) {
    res.view('school/index');
  },
	
	findStud : function(req,res, next){

		if(!(req.param('adminno')) )
		{
			var noEmailPassword = [{name: 'noEmailPassword' , message : 'Either email id or password are not entered'}];
			req.session.flash = {
				err: noEmailPassword
			}
			res.view('school/index');
		}

       
		Student.findOneByAdminNo(req.param('adminno') , function foundstud(err, stud ) {
		  console.log(req.param('adminno'));
		  //console.log(err);
			if(!stud){
			var noUser = [{name: 'noUserAccount' , message : 'there is no User for this mail id ' +
						req.param('adminno')
						} ];
			req.session.flash = {
				err: noUser}
			
			res.view('student/index');
		  }
		  else{
		  	res.redirect('/student/show/' + stud.id);
		  }

	});
},
	show : function(req, res, next) {
    Student.findOne(req.param('id'), function foundUser(err, student) {
      if (err) return next(err);
      if (!student) return next();
      res.view(
      {
        student: student
      });
    });
},
edit: function(req, res, next) {

    // Find the user from the id passed in via params
    Student.findOne(req.param('id'), function foundUser(err, stud) {
      if (err) return next(err);
      if (!stud) return next('User doesn\'t exist.');

      res.view({
        student: stud
      });
    });
  },

update: function(req,res,next){
	var studObj = {
        name: req.param('name'),
        section: req.param('section'),
        standard: req.param('standard'),
        mobileno: req.param('mobileno')
      }

    Student.update(req.param('id'), studObj, function studentUpdated(err) {
      if (err) {
     res.view('student/edit/' + req.param('id'));

      }
      res.redirect('/student/show/' + req.param('id'));
    });
  }


};

