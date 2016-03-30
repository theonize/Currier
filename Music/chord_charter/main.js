/*
	this script displays text contents on the screen - wow
	it relies on a bit of special formatting
		<J-X,0-9>	angle brackets contain a single letter and allow jumping to that location by pressing that key
					establishes a new section which ends at the next new-line
					indents text in that section
		(J-X,0-9)	displays the section with this label
		{title}		displays a title with special formatting
		[II]		roman numerals in square brackets are taken to be chords and will be translated as such based on the key

	hotkeys
		pressing a letter A-G will transpose the song into that key
		<up>, <down> transposes the song up/down by a half-step

		pressing a letter J-X or 0-9 will jump to that location
*/

var cmdline = process.stdin;
var filepath = process.argv[2];
var fs = require('fs');
var jsonfile = require('jsonfile');
var key = 0;
var mainText = '';
var note = ['A','Bb','B','C','C#','D','D#','E','F','F#','G','G#','A','Bb','B','C','C#','D','D#','E','F','F#','G','G#'];
var tone = {'A':0,'B':2,'C':3,'D':5,'E':7,'F':8,'G':10};

var keyNames = jsonfile.readFileSync('./keys.json');

fs.readFile(filepath, 'utf8', function(err, data) {
	if (err) {
		return console.error(err);
	}

	mainText = data;
});

cmdline.setRawMode(true);
cmdline.on('data', function(input) {
	var validKeys = 'ABCDEFG';
	input = input.toString().toUpperCase()[0];

	input = keyNames[input];

	if (validKeys.indexOf(input) >= 0) {
		key = tone[input];

		// clear the console
		console.log('\033[2J');

		console.log('key of ' + note[key]);

		console.log(chordChange(mainText));
	} else if (input == 'ESC') {
		process.exit();
	}

});

function chordChange(text) {
	return text.replace(/\[(.*?)\]/g, function(match) {
		var chord = match.substr(1, match.length-2);
		var chordNum = 0;
		var tag = '';

		switch (chord) {
			case 'I':
				chordNum = 1;
				tag = '  ';
				break;
			case 'II':
				chordNum = 3;	 
				tag = 'm ';
				break;
			case 'III':
				chordNum = 5;	 
				tag = 'm ';
				break;
			case 'IV':
				chordNum = 6;	 
				tag = '  ';
				break;
			case 'V':
				chordNum = 8;	 
				tag = '  ';
				break;
			case 'VI':
				chordNum = 10;	 
				tag = 'm ';
				break;
			case 'VII':
				chordNum = 12;	 
				tag = '* ';
				break;
		}

		// chordNum is NOT zero-based, but the arrays are: thus, the offset in the brackets
		if ((chordNum == 1) || (chordNum == 4) || (chordNum == 5)) {
			return note[chordNum + key - 1] + tag;
		} else {
			return note[chordNum + key - 1] + tag;
		}
	});
}
