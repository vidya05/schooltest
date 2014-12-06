/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 //connection: 'herokuPostgresqlServer',
 connection: 'mysql',
  attributes: {

  	username:{
  		type:'string',
  		required:true
  	},

  	password:{
  		type:'string'
  	},
  	admin :{
  		type : 'boolean'
  	}

  }

};

