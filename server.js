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
		var postData = '';

		request.senEncoding = 'utf-8';
		console.log("require for" + pathname);

		request.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
			console.log("request post data chunk: " + postDataChunk + "..");
		});
		request.addListener('end', function() {
			route(handle, pathname, response, postData);
		});


	});
	server.listen(8888);
	console.log('server has started on 8888 port.');
};
