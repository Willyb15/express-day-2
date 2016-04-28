###Using Node.js and Express.js to inject data into the View
###App made Using Express to make HTTP Get Requests, Parse Into JSON Object, and Inject into View Using EJS
####Installed Express.js through the terminal
```
npm install express --save
```
####Installed EJS through the terminal
```
npm install ejs --save
```
#####Inside app.js folder changed "app.set" from jade to ejs
#####Inside views folder updated index.jade to index.ejs
#####From the routes folder created a function to handle HTTP Get requests
#####If response status code == 200, I put the data into an empty string variable.
#####Then used JSON.parse turn string into JSON.
```js
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
```
#####Inside index.ejs used the updated values from this object into the View.
```ejs
	<h1>Using Express.js and EJS to inject data into the View</h1>
	<h2>Data from Weather API</h2>

	<h3>What City?</h3>
	<h4><%=body.name %></h4>
	
	<h3>The Temperature</h3>
	<h4><%= body.main.temp %></h4>

	<h3>Whats going on in the sky?</h3>
	<h4><%=body.weather[0].description %></h4>
	
	<h3>Whats the humidity</h3>
	<h4><%=body.main.humidity %>%</h4>
```
