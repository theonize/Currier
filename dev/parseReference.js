var Books = require('./books.js')

var parser = function(ref) {
	var R = ref.split(' ');
	
	var bookSlug = R[0];

	var index = R[1].split(':');

	this.chapter = index[0];
	this.verse = index[1];
}

module.exports = parser;
