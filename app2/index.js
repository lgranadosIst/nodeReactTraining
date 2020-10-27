var http = require("http");
var funImport = require('funnies');

var server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'text/html'});
    let fun = new funImport.Funnies();
    response.end(fun.message());
 });
 server.listen(8081);

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');