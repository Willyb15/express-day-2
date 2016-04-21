###Using Node.js and Express.js to inject data into the View
###App made Using Express to make HTTP Get Requests, Parse Into JSON Object, and Inject into View Using EJS
####Installed Express.js through the terminal
####Installed EJS through the terminal
#####Inside app.js folder changed "app.set" from jade to ejs
#####Inside views folder updated index.jade to index.ejs
#####From the routes folder created a function to make HTTP Get requests
#####If response status code == 200, I put the data into an empty string variable.
#####Then used JSON.parse turn string into JSON.
#####Inside index.ejs used the updated values from this object into the View.
