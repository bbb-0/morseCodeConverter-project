import * as challenge from './script.js';

describe('Morse code conversion functions', () => {
	test('englishToMorse should convert English text to morse code', () => {
		const englishText = 'HELLO WORLD';
		const expectedMorseCode = '.... . .-.. .-.. --- / .-- --- .-. .-.. -..';
		expect(englishToMorse(englishText, dictionary)).toEqual(expectedMorseCode);
	});

	test('morseToEnglish should convert morse code to English text', () => {
		const morseCode = '.... . .-.. .-.. --- / .-- --- .-. .-.. -..';
		const expectedEnglishText = 'HELLO WORLD';
		expect(morseToEnglish(morseCode, dictionary)).toEqual(expectedEnglishText);
	});
});
