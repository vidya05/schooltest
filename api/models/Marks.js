/**
* marks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
// connection: 'herokuPostgresqlServer',
connection: 'mysql',

  attributes: {

  	adminNo :{
  	  	type: 'string',
  	  	required: true
  	  },

 	testname :{
  	  	type: 'string',
  	  	required: true
  	  },
      month :{
  	  	type: 'string'
  	  },

  	  telugu : {
  	  	type:'integer'
  	  },
       telugurank : {
        type:'integer'
      },
       hindi : {
        type:'integer'
      },
       hindirank : {
        type:'integer'
      },
       english : {
        type:'integer'
      },
      englishrank : {
        type:'integer'
      },
       maths : {
        type:'integer'
      },
      mathsrank : {
        type:'integer'
      },
       science : {
        type:'integer'
      },
       sciencerank : {
        type:'integer'
      },
      physics : {
        type:'integer'
      },
      physicsrank : {
        type:'integer'
      },
      chemistry : {
        type:'integer'
      },
      chemrank : {
        type:'integer'
      },
      biology : {
        type:'integer'
      },
       biologyrank : {
        type:'integer'
      },
       social : {
        type:'integer'
      },
      socialrank : {
        type:'integer'
      },
       total : {
        type:'integer'
      },
      acapercentage : {
        type:'string'
      },
      attpercentage : {
        type:'string'
      },
      rank : {
        type:'string'
      },
      grade : {
        type:'string'
      },
      comments : {
        type:'string'
      }
  }
};

