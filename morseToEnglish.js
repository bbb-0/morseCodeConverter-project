const morseToEnglish = (stringToTranslate, dictionaryObj) => {
	const invertedDictionary = Object.keys(dictionaryObj).reduce((obj, key) => {
		obj[dictionaryObj[key]] = key;
		return obj;
	}, {});
	return stringToTranslate
		.split(' ')
		.map((code) => {
			return invertedDictionary[code];
		})
		.join('');
};
