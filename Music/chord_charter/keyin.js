var codeName = require('./keycode');
var input = '';
var jsonfile = require('jsonfile');
var stdin = process.stdin;

stdin.setRawMode(true);

var asdf = {};

stdin.on('data', function(chunk) {
	// console.log(codeName(chunk));

	// beginnings of the aliases JSON
	// asdf[chunk.toString()] = chunk.toString();
	// jsonfile.writeFile('./keys.json', asdf, {spaces:2});

	console.dir(chunk.toString());
});

module.exports = input;
