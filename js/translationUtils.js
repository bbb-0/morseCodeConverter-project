export const reverseObject = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        return acc;
    }, {});
};

export const englishToMorse = (stringToTranslate, dictionaryObj) => {
    return stringToTranslate
        .toUpperCase()
        .split("")
        .map((char) => {
            return dictionaryObj[char];
        })
        .join(" ");
};

export const morseToEnglish = (stringToTranslate, reversedDictionary) => {
    return stringToTranslate
        .split(" ")
        .map((char) => {
            return reversedDictionary[char];
        })
        .join("");
};
