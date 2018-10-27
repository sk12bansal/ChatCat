/*
* @Author: surakum2
* @Date:   2018-10-27 17:01:38
* @Last Modified by:   surakum2
* @Last Modified time: 2018-10-27 23:32:12
*/
'use strict'
if(process.env.NODE_ENV === 'production'){
	//offer production stage environment variables
	module.exports = {
		host: process.env.host || "",
		dbURI: process.env.dbURI ,
		sessionSecret: process.env.sessionSecret,
		fb:{
			clientID: process.env.fbClientID,
			clientSecret: process.env.fbClientSecret,
			callbackURL: process.env.host + "/auth/facebook/callback",
			profileFields: ['id','displayName','photos']

		}
	}
}else{
	//offer dev stage settings and data
	module.exports = require('./development.json');
}