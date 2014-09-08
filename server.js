var http = require('http');
var url = require('url');
var route = require('./router');

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
exports.start = function(route, handle) {
	var server = new http.Server();
	server.on('request', function(request, response) {
		// request url
		var pathname = url.parse(request.url).pathname;
		console.log("require for" + pathname);
		var content = route(handle, pathname);

		// response to browser
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(content);
		response.end();
	});
	server.listen(8888);
	console.log('server has started on 8888 port.');
};
