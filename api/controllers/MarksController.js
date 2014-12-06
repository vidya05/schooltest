/**
 * MarksController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  findStud : function(req,res, next){

		
       
		Marks.findOneByAdminNo(req.param('adminno') , function foundmark(err, mark ) {
			if(!mark){
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
  };
