# This script retrieves a single line (verse) from a chapter (file) in a directory (book)


sub MAIN($ref) {
	my @contents;
	my @ref;
	my @temp;

	my $book;
	my $chapter;
	my $verse;

	@ref = $ref.split(":");

	$book = @ref[0];
	$chapter = @ref[1].fmt('%02i');
	$verse = @ref[2];

	@contents = "./$book/$chapter.amt".IO.lines;

	say @contents[$verse];
}
