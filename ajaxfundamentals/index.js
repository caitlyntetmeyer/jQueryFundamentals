// require is a part of node that helps us import node_modules folder.
// require also pulls from another JavaScript file with an export.
var express = require('express');
var app = express();
var http = require('http').Server(app);

// "Render me these things as static files." 
// There's nothing you have to do to these files, like compile them - 
// they'll just run on the internet.
// This is express:
app.use(express.static(__dirname + '/public'));

// When you go to the home page (localhost:3000), render stuff to the user.
// Go to directory name. We're pointing to index.html.
// This is express:
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// Open up a port on your computer
// There's an http function inside of node.
// This is node:
http.listen(3000, function(){
	console.log('listening on port 3000');
});