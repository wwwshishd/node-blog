

exports.start = function(response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('hello start.');
	response.end();
}

exports.unload = function(response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('hello upload.');
	response.end();
}

