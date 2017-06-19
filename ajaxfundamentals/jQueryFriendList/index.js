/* 
Create a simple server that will allow us to serve up our files
and pass data using HTTP (Hyper Text Transfer Protocol).
Load Express as a program. Save it to a variable called "express".
*/
var express = require('express');

// Save the express method to a variable called "app".
// Add () to actually USE express's power.
var app = express();

/* 
Node.js has a built-in module called HTTP, which allows Node.js 
to transfer data over the Hyper Text Transfer Protocol (HTTP).
This is how you include the HTTP module: var http = require('http');
*/
// Create a Server
var http = require('http').Server(app);

// Tell Node where to find static files in the public directory:
app.use(express.static(__dirname + '/public'));

// Run a function that serves up our index.html file.
// Once that's served up, the app will run from there:
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

// Set up the server to run on a local port:
http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});