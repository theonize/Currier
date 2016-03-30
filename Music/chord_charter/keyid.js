// identifies which key was pressed via string-name

var filepath = './keys.json';
var input = '';
var jsonfile = require('jsonfile');
var stdin = process.stdin;

var asdf = {};

asdf = jsonfile.readFileSync(filepath);

console.log('\r\nInput> ');

stdin.setRawMode(true);

stdin.on('data', function(chunk) {
	input = chunk.toString();

	console.log(asdf[input]);
});
