var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var {info, error} = require('./modules/my-log');
var {countries} = require('countries-list');

var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url);
    console.log("parsed: ", parsed);
    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query);
    console.log("Query: ", query);
    if (pathname == '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('<html><body>Web page fro Node.js</body></html>');
        res.end();
    } else if (pathname == '/exit') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('<html><body>See you later</body></html>');
        res.end();
    } else if (pathname == '/country') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(JSON.stringify(countries[query.code]));
        res.end();
    }else if (pathname == '/error') {
        var result = error(pathname);
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(result);
        res.end();
    }else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.write('<html><body>Not Found</body></html>');
        res.end();
    }

});

server.listen(4000);
console.log("Running on 4000");