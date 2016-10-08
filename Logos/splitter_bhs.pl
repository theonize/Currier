# Line-delimited file parser
# file format:
#	*\w\s*\n\:*\n\t*\w


sub MAIN($file, $dest_dir) {
	my @lines;
	my @output;

	mkdir $dest_dir;

	@lines = $file.IO.lines;

	for @lines -> $line {
		if $line {
			@output.push($line);
		} else {
			$output = open("$dest_dir\\$chapter.txt", :a);

			$output.say($text);
		}
	}

	$IO.rename("$dest_dir\\$file");
}
