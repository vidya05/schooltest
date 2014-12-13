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
			var noUser = [{name: 'noStudentAccount' , message : 'there is no student for this Admin number' +
						req.param('adminno')
						} ];
			req.session.flash = {
				err: noUser}
			
			res.view('school/index');
		  }
		  else{
        req.session.Stud = stud;
		  	res.redirect('/student/show/' + stud.id);
		  }

	});
},
	show : function(req, res, next) {
    Student.findOne(req.param('id'), function foundUser(err, student) {
      if (err) return next(err);
      if (!student) return next();
      var cloudinary = require('cloudinary');
      var urlUp = 1;
   // console.log(cloudinary.url('sample.jpg'));
   if(!student.simageurl){
    urlUp = 0;
    student.simageurl = cloudinary.url(student.simage);
    //console.log(cloudinary.url(student.simage));
   }
   if(!student.image1url){
    urlUp = 0;
    student.image1url = cloudinary.url(student.image1);
    //console.log(cloudinary.url(student.simage));

   }
   if(!student.image2url){
    urlUp = 0;
    student.image2url = cloudinary.url(student.image2);
   }
   if(!student.image3url){
    urlUp = 0;
    student.image3url = cloudinary.url(student.image3);
   }
   if(!student.image4url){
    urlUp = 0;
    student.image4url = cloudinary.url(student.image2);
   }

if(urlUp==0){

  console.log("updating");
   var studObj = {
        simageurl: student.simageurl,
        image1url: student.image1url,
        image2url: student.image2url,
        image3url: student.image3url,
        image4url: student.image4url,
      }

    Student.update(req.param('id'), studObj, function studentUpdated(err) {
      if(err) return next(err);
    });
  }
  
   //student.image2 = cloudinary.url('sample.jpg');
    //student.image2 = cloudinary.url(student.image2);
   // student.update();
    Marks.findByAdminNo((student.adminNo), function foundMark(err, mark){
      if(err) return next(err);
      if (!mark) return next('marks doesn\'t exist.');
     res.view({
        student: student,
        marks: mark
      });
      
    });
  });
},
edit: function(req, res, next) {
    // Find the user from the id passed in via params
    Student.findOne(req.param('id'), function foundUser(err, stud) {
      if (err) return next(err);
      if (!stud) return next('User doesn\'t exist.');
      res.view(
      {
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
  },



uploadimage: function(req,res,next){
var cloudinary = require('cloudinary');
  req.file('avatar').upload(function (err, files) {
   // console.log(files.length);
    console.log(files);
   // console.log(files[1].fd);
    // console.log(files[1].filename);
     for(var j = 0; j< files.length ; j++ ){
      console.log("processing for ", files[j].filename);
      cloudinary.uploader.upload(files[j].fd, function(result) { console.log(result) }, 
                           { public_id: files[j].filename });
      
     }
    });
    res.view('school/index');
  }

};

