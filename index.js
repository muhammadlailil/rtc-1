var express = require('express');
var app = express();
// create express peer server
var ExpressPeerServer = require('peer').ExpressPeerServer;

var options = {
    debug: true
}

// create a http server instance to listen to request
var server = require('http').createServer(app);

app.get('/',function(req, res){
   res.send('oke')
});
// peerjs is the path that the peerjs server will be connected to.
app.use('/peerjs', ExpressPeerServer(server, options));
// Now listen to your ip and port.
server.listen(8878);