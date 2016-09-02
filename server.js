var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app)
var io = require('socket.io')(server)

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

server.listen(PORT);

app.get('/', function(req, res){
	res.render('index.ejs');
});

io.on('connection', function(socket){
	socket.emit('news', {hello: 'world'});
	socket.on('my other event', function(data){
		console.log(data)
	});
});



// app.io.route('ready', function(req){
// 	req.io.join(req.data.chat_room);
// 	req.io.join(req.data.signal_room);
// 	app.io.room(req.data).broadcast('announce', {
// 		message: 'New client in the ' + req.data + 'room'
// 	})
// })

// app.io.route('send', function(req){
// 	app.io.room(req.data.room).broadcast('message', {
// 		message: req.data.message,
// 		author: req.data.author
// 	});
// })

// app.io.route('signal', function(req) {
// 	//note the use of req here for broadcasting so only the sender doesn't receive their own messages
// 	req.io.room(req.data.room).broadcast('signaling_message', {
// 		type: req.data.type, 
// 		message: req.data.message
// 	});
// })



console.log('The magic happens on port ' + PORT);