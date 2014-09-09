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
		// route and response
		route(handle, pathname, response);
	});
	server.listen(8888);
	console.log('server has started on 8888 port.');
};
