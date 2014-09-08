var http = require('http');

// http.createServer(function(request, response){ }).listen(port);
/**
 * var server = new http.Server();
 * function createServer(callback) {
 *     server.on(request, callback(req, res) {
 *	       // do...
 *     });
 *     return server;
 * }
 */
var server = new http.Server();
server.on('request', function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('hello world!');
	response.end();
});
server.listen(8888);
console.log('server has started on 8888 port.');
