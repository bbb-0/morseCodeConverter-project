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
