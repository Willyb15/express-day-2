var http = require('http');
var express = require('express');
var router = express.Router();
// var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID="+apikey;
	var weatherRequest = http.get(weatherUrl, function(weatherResponse){
		// console.log(weatherResponse);
		if(weatherResponse.statusCode == 200){
			var body = '';
			weatherResponse.on('data', function(dataChunk){
				// console.log(dataChunk);
				body += dataChunk;
			});
			weatherResponse.on('end', function(){
				console.log(body);
				body = JSON.parse(body);
				res.render('index', {body: body});
			});
		}else{
			res.end('Done');
		}
	});
});

module.exports = router;
