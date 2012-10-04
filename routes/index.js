var request = require('request'),
	http = require('http');

exports.currentDriverStandings = function(req, response){
	
	request.get("http://ergast.com/api/f1/current/driverStandings.json", function (err, res, body) {
		if (!err) {
			var model = JSON.parse(body);			
		   
			response.render('index', { title: 'Current Driver Standings', RaceData: model.MRData.StandingsTable });
		}
	});
		 
};

exports.currentConstructorStandings = function(req, response){
	
	request.get("http://ergast.com/api/f1/current/5/constructorStandings.json", function (err, res, body) {
		if (!err) {
			var model = JSON.parse(body);			
		   
			response.render('constructorstandings', { title: 'Current Constructor Standings', RaceData: model.MRData.StandingsTable });
		}
	});
		 
};