// get the keycode name

function keycodeName(chunk) {
	var input = chunk;

	switch (chunk[0]) {
		case 27: {
			switch (chunk[1]) {
				case 91: 	// escape keys
					switch (chunk[2]) {
						case 65: 	// up
							input = 'UP';
							break;
						case 66: 	// down
							input = 'DOWN';
							break;
						case 67: 	// right
							input = 'RIGHT';
							break;
						case 68: 	// left
							input = 'LEFT';
							break;
					}
					break;
				default:
					input = 'ESC';
					break;
			}
		}
	}

	return input;
}

module.exports = keycodeName;