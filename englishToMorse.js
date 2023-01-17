const englishToMorse = (stringToTranslate, dictionaryObj) => {
	return stringToTranslate
		.toUpperCase()
		.split('')
		.map((char) => {
			return dictionaryObj[char];
		})
		.join(' ');
};
