/*
* @Author: surakum2
* @Date:   2018-10-27 17:07:58
* @Last Modified by:   surakum2
* @Last Modified time: 2018-10-27 22:58:58
*/
'use strict'
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Log an error if the connection falls

Mongoose.connection.on('error',error=>{
	console.log("mongoDb Error:",error);
});

// Create a Schema that defines the structure for storing user data
const chatUser = new Mongoose.Schema({
		profileId: String,
		fullName: String,
		profilePic: String
});

// Turn the Schema inti a usable model

let userModel = Mongoose.model('chatUser',chatUser);

module.exports = {
	Mongoose,
	userModel
}