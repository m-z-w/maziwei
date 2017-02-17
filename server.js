var http = require('http');
var url = require('url');
// var util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, {'conTent-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    console.log(req);
    // res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
console.log("HTTP server is listening at port 3000.");
console.log("change");