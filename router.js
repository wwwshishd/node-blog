
exports.route = function(handle, pathname) {
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		console.log('No such handler of ' + pathname);
		return '404 not found.';
	}
}

