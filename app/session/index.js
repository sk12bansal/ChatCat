/*
* @Author: surakum2
* @Date:   2018-10-27 17:20:07
* @Last Modified by:   surakum2
* @Last Modified time: 2018-10-27 17:35:41
*/
'use strict'
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('../config');
const db = require('../db');

if(process.env.NODE_ENV === 'production'){
	//Initialize session with settings for production
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({
			mongooseConnection: db.Mongoose.connection
		})
	});
}else{
	//Initialize session with settings for dev
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: true
	});
}

