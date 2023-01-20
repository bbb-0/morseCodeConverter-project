const dictionary = {
	A: '.-',
	B: '-...',
	C: '-.-.',
	D: '-..',
	E: '.',
	F: '..-.',
	G: '--.',
	H: '....',
	I: '..',
	J: '.---',
	K: '-.-',
	L: '.-..',
	M: '--',
	N: '-.',
	O: '---',
	P: '.--.',
	Q: '--.-',
	R: '.-.',
	S: '...',
	T: '-',
	U: '..-',
	W: '.--',
	X: '-..-',
	Y: '-.--',
	Z: '--..',
	0: '-----',
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.',
	' ': '/',
};

const reverseDictionary = (dictionaryObj) => {
	return Object.keys(dictionaryObj).reduce((acc, key) => {
		acc[dictionaryObj[key]] = key;
		return acc;
	}, {});
};

const englishToMorse = (stringToTranslate, dictionaryObj) => {
	return stringToTranslate
		.toUpperCase()
		.split('')
		.map((char) => {
			return dictionaryObj[char];
		})
		.join(' ');
};

const morseToEnglish = (stringToTranslate, dictionaryObj) => {
	const reversedDictionary = reverseDictionary(dictionaryObj);
	return stringToTranslate
		.split(' ')
		.map((char) => {
			return reversedDictionary[char];
		})
		.join('');
};

document.getElementById('input').addEventListener('input', (event) => {
	const inputText = event.target.value;
	if (inputText.match(/[A-Z]/i)) {
		const morseCode = englishToMorse(inputText, dictionary);
		document.getElementById('output').value = morseCode;
	} else {
		const englishText = morseToEnglish(inputText, dictionary);
		document.getElementById('output').value = englishText;
	}
});

document.getElementById('clear').addEventListener('click', () => {
	document.getElementById('input').value = '';
	document.getElementById('output').value = '';
});
