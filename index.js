// var http = require('http')

// http.createServer(function (request, response){
// 	response.writeHead(200, {"Content-Type": "text/plain"})
// 	response.end("Hello World\n")
// }).listen(process.env.PORT)
var express = require('express');
var app = express();

/* ==========================================================
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT, function() {
  console.log('Server listening on port process.env.PORT');
});