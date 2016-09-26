var data = require('./cross-ref.json');
var fs = require('fs');

var output = {};

for (var X in data) {
	var from = data[X].From;
	var ref = data[X].To;

	if (!output[from]) output[from] = [];

	output[from].push(ref);
}

fs.writeFile('./cross-ref-data.json', JSON.stringify(output, null, "\t"));
