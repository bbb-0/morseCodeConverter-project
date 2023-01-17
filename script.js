function convert(input, type) {
	const morseCode = {
		a: '.-',
		b: '-...',
		c: '-.-.',
		d: '-..',
		e: '.',
		f: '..-.',
		g: '--.',
		h: '....',
		i: '..',
		j: '.---',
		k: '-.-',
		l: '.-..',
		m: '--',
		n: '-.',
		o: '---',
		p: '.--.',
		q: '--.-',
		r: '.-.',
		s: '...',
		t: '-',
		u: '..-',
		v: '...-',
		w: '.--',
		x: '-..-',
		y: '-.--',
		z: '--..',
		' ': ' ',
	};

	if (type === 'encode') {
		// Convert letters to morse code
		let output = '';
		input.split('').forEach((char) => {
			if (morseCode[char.toLowerCase()])
				output += morseCode[char.toLowerCase()] + ' ';
			else output += char;
		});
		return output;
	} else if (type === 'decode') {
		// Convert morse code to letters
		let output = '';
		input.split(' ').forEach((code) => {
			let letter = '';
			for (let key in morseCode) {
				if (morseCode[key] === code) {
					letter = key;
					break;
				}
			}
			if (letter !== '') output += letter;
			else if (code === '') output += ' ';
			else output += code;
		});
		return output;
	}
}

const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
	let inputValue = input.value;
	if (/^[\s.-]+$/.test(inputValue)) {
		output.value = convert(inputValue, 'decode');
	} else {
		output.value = convert(inputValue, 'encode');
	}
});

const clearText = document.querySelector('#clear');
clearText.addEventListener('click', function () {
	input.value = '';
	output.textContent = '';
});
