"use strict";

var request = require('request'),
	http = require('http');

exports.currentDriverStandings = function(req, response) {
	
	var date = new Date();
	var year = date.getUTCFullYear();

	request.get("http://ergast.com/api/f1/" + year + "/driverStandings.json", function(err, res, body) {
		if(!err) {
			buildData('current/index', body, req, response);
		}
	});

};

exports.currentConstructorStandings = function(req, response) {

	var date = new Date();
	var year = date.getUTCFullYear();

	request.get("http://ergast.com/api/f1/" + year + "/5/constructorStandings.json", function(err, res, body) {
		if(!err) {
			buildData('current/constructorstandings', body, req, response);
		}
	});

};

exports.currentSchedule = function(req, response) {

	var date = new Date();
	var year = date.getUTCFullYear();

	request.get("http://ergast.com/api/f1/" + year + ".json", function(err, res, body) {
		if(!err) {
			var model = JSON.parse(body);

			response.render("current/currentSchedule", {
				currentUrl: req.path,
				RaceData: model.MRData.RaceTable
			});
		}
	});

};

function buildData(url,  body, req, response) {

	var model = JSON.parse(body);
	response.render(url, {
		currentUrl: req.path,
		RaceData: model.MRData.StandingsTable
	});
}