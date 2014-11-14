/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 connection: 'mysql',

  attributes: {

  	adminNo :{
  	  	type: 'string',
  	  	required: true
  	  },

 	name :{
  	  	type: 'string',
  	  	required: true
  	  },
  	 section :{
  	  	type: 'string'
  	  },

  	  standard : {
  	  	type:'string'
  	  },

  	  mobileno : {
  	  	type :'string',
  	  },

  	  image1 :{
  	  	type:'string'
  	  },
  	   image2 :{
  	  	type:'string'
  	  },
  	   image3 :{
  	  	type:'string'
  	  },
  	   image4 :{
  	  	type:'string'
  	  }

  }
};

