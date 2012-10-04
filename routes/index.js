var request = require('request'),
	http = require('http');

exports.index = function(req, response){
  
	var resultsObj = '';
	
	request.get("http://ergast.com/api/f1/current/driverStandings.json", function (err, res, body) {
		if (!err) {
			var model = JSON.parse(body);
			
		   
			response.render('index', { title: 'Express', RaceData: model.MRData.StandingsTable });
		}
	});
	
	  
	 
};