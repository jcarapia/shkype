var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
	res.render('index.ejs');
});

var PORT = process.env.PORT || 3000

app.listen(PORT)

console.log('The magic happens on port ' + PORT);