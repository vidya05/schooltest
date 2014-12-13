/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 connection: 'herokuPostgresqlServer',
//connection: 'mysql',

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
  	  	type:'integer'
  	  },

  	  mobileno : {
  	  	type :'string',
  	  },
      
       simage :{
        type:'string'
      },
      simageurl :{
         type:'string'
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
  	  },
       image1url :{
        type:'string'
      },
       image2url :{
        type:'string'
      },
       image3url :{
        type:'string'
      },
       image4url :{
        type:'string'
      }

  }
};

