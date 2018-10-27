/*
* @Author: surakum2
* @Date:   2018-10-27 21:14:10
* @Last Modified by:   surakum2
* @Last Modified time: 2018-10-27 23:31:55
*/

'use strict';
const passport = require('passport');
const config = require('../config');
const h =require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = ()=>{

	passport.serializeUser((user,done)=>{
		done(null,user.id);
	});
	passport.deserializeUser((id,done)=>{
		//find the user using the _id
		h.findById(id)
			.then(user=> done(null,user))
			.catch(error => console.log('Error when deserializing the user'));
	});
	let authProcessor = (accessToken,refreshToken,profile,done)=>{
		//Find a user in the local db using profile id
		//if the user is found return the user data using the done()
		//if the user is not found, create one in the local db and return 
		h.findOne(profile.id)
			.then(result=>{
				if(result){
					done(null,result);	
				} else{
					// Create a new User and return
					h.createNewUser(profile)
						.then(newChatUser => done(null,newChatUser))
						.catch(error => console.log('Error when creating new User'));
				}
			});

	}
	passport.use(new FacebookStrategy(config.fb,authProcessor));
}