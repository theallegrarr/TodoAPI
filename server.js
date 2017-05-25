var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
	// body...
	res.send('Todo API Root');
});


app.listen(PORT, function () {
	// body...
	console.log('express listening on port '+ PORT + '!');
});