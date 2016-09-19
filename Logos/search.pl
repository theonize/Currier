# This script retrieves a single line (verse) from a chapter (file) in a directory (book)


sub MAIN($book, $chapter, $verse) {
	my @contents = "./$book/$chapter.amt".IO.lines;

	say @contents[$verse];
}
