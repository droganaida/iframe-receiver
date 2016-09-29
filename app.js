
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

require('./routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.set('view options', {compileDebug: false, self: true, cache: true});

var httpServer = http.createServer(app);
var port = 3002;

function onListening(){
    console.log('Listening on port %d', port);
}

httpServer.on('listening', onListening);

httpServer.listen(port, '127.0.0.1');

