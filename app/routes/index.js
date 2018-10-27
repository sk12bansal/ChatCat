/*
* @Author: surakum2
* @Date:   2018-10-27 11:20:06
* @Last Modified by:   surakum2
* @Last Modified time: 2018-10-27 23:58:53
*/

'use strict';
const h = require('../helpers');
const passport = require('passport');
module.exports = () =>{
	let routes = {
		'get':{
			'/':(req,res,next)=>{
				res.render('login');
			},
			'/rooms':(req,res,next)=>{
				res.render('rooms',{
					user: req.user
				});
			},
			'/chat':(req,res,next)=>{
				res.render('chatroom');
			},
			'/auth/facebook': passport.authenticate('facebook'),
			'/auth/facebook/callback': passport.authenticate('facebook',{
				successRedirect: '/rooms',
				failureRedirect: '/'
			})
			/*'/getsession':(req,res,next)=>{
				res.send("my favourite color:"+req.session.favColor);
			},
			'/setsession':(req,res,next)=>{
				req.session.favColor = "red";
				res.send("session set");
			}*/
		},
		'post':{

		},
		'NA':(req,res,next)=>{
			res.status(404).sendFile(process.cwd()+'/views/404.htm');
		}
	}

	return h.route(routes);
}