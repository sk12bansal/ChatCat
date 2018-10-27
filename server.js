/*
* @Author: surakum2
* @Date:   2018-10-27 09:39:11
* @Last Modified by:   surakum2
* @Last Modified time: 2018-10-27 23:46:09
*/

'use strict'
console.log("Welcome to Chatcat.");

const express = require('express');
const app = express();
const chatCat = require('./app');
const passport = require('passport');


app.set('port',process.env.PORT||3000);
//app.set('views','./views');
app.use(express.static('public'));
app.set('view engine','ejs');

app.use(chatCat.session);
app.use(passport.initialize());
app.use(passport.session());

app.use('/',chatCat.router);

/*let helloMiddleware = (req,res,next)=>{
	req.hello= "Hello! It's me !  i was wondering.......... you get the idea!";
	next(); 

}*/

// app.use('/dashboard',helloMiddleware);

/*app.get('/',(req,res,next)=>{
	//res.send('<h1> Hello Express!</h1>');
	//res.sendFile(__dirname+'/views/login.htm');
	res.render('login',{
		pageTitle: 'My Login Page'
	});
	//console.log(req.hello);

});*/

/*app.get('/dashboard',(req,res,next)=>{
	res.send('<h1> This is the dashboard page! Middleware says:'+req.hello+'</h1>');

});*/

app.listen(app.get('port'),()=>{
	console.log('Chatcat Runnit on port:',app.get('port'));
});