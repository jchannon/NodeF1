var request = require('request'),
    http = require('http');

exports.index = function(req, response){
  
    var resultsObj = '';
	
	request.get("http://ergast.com/api/f1/current/last/results.json", function (err, res, body) {
	    if (!err) {
	        resultsObj = JSON.parse(body);
	        //Just an example of how to access properties:
	        console.log(resultsObj.MRData.RaceTable.Races[0].raceName);
	       
	        response.render('index', { title: 'Express', raceName: resultsObj.MRData.RaceTable.Races[0].raceName });
	    }
	});
	
  	
  	
};