/*
* @Author: surakum2
* @Date:   2018-10-27 11:03:27
* @Last Modified by:   surakum2
* @Last Modified time: 2018-10-27 23:28:08
*/

'use strict'
/*const router = require('express').Router();

router.get('/',(req,res,next)=>{
	res.render('login',{
		pageTitle: 'My Login Page'
	});
});*/

/*router.get('/info',(req,res,next)=>{
	res.send('testPage');
});*/

// Social Authentication Logic

require('./auth')();

module.exports = {
	router: require('./routes')(),
	session: require('./session')
}