
exports.route = function(handle, pathname, response) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {
		console.log('No such handler of ' + pathname);
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.write('404 not found.');
		response.end();
	}
}

