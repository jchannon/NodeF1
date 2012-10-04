var request = require('request'),
	http = require('http');

exports.currentDriverStandings = function(req, response){
	
	request.get("http://ergast.com/api/f1/current/driverStandings.json", function (err, res, body) {
		if (!err) {
			buildData('index', 'Current Driver Standings', body, response);
		}
	});
		 
};

exports.currentConstructorStandings = function(req, response){
	
	request.get("http://ergast.com/api/f1/current/5/constructorStandings.json", function (err, res, body) {
		if (!err) {
			buildData('constructorstandings', 'Current Constructor Standings', body, response);
		}
	});
		 
};

function buildData(url, title, body, response)
{
	var model = JSON.parse(body);			
		   
	response.render(url, { title: title, RaceData: model.MRData.StandingsTable });
}