"use strict";

exports.login = function(req, resp) {
	resp.render("login/login", {
		currentUrl: req.path
	});
};

exports.loginuser = function(req, resp) {
	console.log(req.body.username + req.body.password);
	resp.send(req.body.username + req.body.password);
};