import test from 'node:test';
import { dictionary } from './js/dictionary.js';
import { englishToMorse, morseToEnglish } from './js/morseUtils.js';

// Add edge cases for non supported symbol/ char, what should the functios do in that case?
// test for single char? for sentence? test different casing?
// test the reverseObject function too

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

describe('Conversion with characters that are not supported', () => {
	test();
});
