var http = require("http");
var server = http.createServer((request, response) => {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Recibí una solicitud");

    // Send the response body as "Hello World"
    response.end('Hello World\n');
 });
 server.listen(8081);

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
