var filepath = './keys.json';
var input = '';
var jsonfile = require('jsonfile');
var stdin = process.stdin;

var asdf = {};
var keycode = '';
var keyname = '';

asdf = jsonfile.readFileSync(filepath);

console.log('\r\nInput> ');

stdin.on('data', function(chunk) {
	input = chunk.toString();

	if (stdin.isRaw) {
		keycode = input;
		console.log('\r\nInput> ');
		stdin.setRawMode(false);

		asdf[keycode] = keyname.trim();
	} else {
		keyname = input;
		stdin.setRawMode(true);
	}

	jsonfile.writeFile(filepath, asdf, {spaces:2});
});
