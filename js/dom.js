console.log("Hello");
import {
    englishToMorse,
    morseToEnglish,
    reverseObject,
} from "./translationUtils.js";
import { dictionary } from "./dictionary.js";

document.getElementById("input").addEventListener("input", (event) => {
    const inputText = event.target.value;
    // Regex is going to limit the translation possibilities unless you add all possible extra chars to it
    if (inputText.match(/[A-Z0-9]/i)) {
        const morseCode = englishToMorse(inputText, dictionary);
        document.getElementById("output").value = morseCode;
    } else {
        const englishText = morseToEnglish(
            inputText,
            reverseObject(dictionary),
        );
        document.getElementById("output").value = englishText;
    }
});

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
});
