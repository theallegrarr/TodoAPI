var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Water the garden',
	completed: false
}, {
	id: 2,
	description: 'go to market',
	completed: false
}, {
	id: 3,
	description: 'go to cinema',
	completed: true
}];

app.get('/', function (req, res) {
	// body...
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	// body...
	res.json(todos);
})

//console.log(todos[0].description);
app.get('/todos/:id', function(req, res) {
	// body...
	//res.send('Asking for todo with id of '+ req.params.id)
	var todosId = parseInt(req.params.id, 10);
	var matchedTodo;

	//console.log(todos);
	//for (var i = 2; i >= 0; i--) {
	//	if(todos[i].id === todosId-1){
	//		res.send(todos[i].description);
	//	}
	//}

	todos.forEach(function (todo) {
		// body...
		if(todosId === todo.id){
			matchedTodo = todo;
		}
	});


	if(matchedTodo){
		res.json(matchedTodo);
	}else{
		res.status(404).send();
	}
});


app.listen(PORT, function () {
	// body...
	console.log('express listening on port '+ PORT + '!');
});

