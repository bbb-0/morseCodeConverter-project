const input = document.getElementById("input");
const output = document.getElementById("output");

const morseCode = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  " ": " ",
};

// Create a reverse dictionary of Morse code to letters
const reverseMorseCode = {};
for (let key in morseCode) {
  reverseMorseCode[morseCode[key]] = key;
}

// Add an event listener to the input element to listen for changes
input.addEventListener("input", function() {
  // Get the input value
  const text = input.value;

  // Create an empty string to store the output
  let outputText = "";

  // Split the input text by space to check if it's morse code
  const morseWords = text.split(" ");
  let isMorse = true;
  for (let i = 0; i < morseWords.length; i++) {
    // check if a morse word is not in the dictionary
    if (!reverseMorseCode[morseWords[i]]) {
      isMorse = false;
      break;
    }
  }

  // check if the input is morse code
  if (isMorse) {
    // loop through the morse words and convert them to letters
    for (let i = 0; i < morseWords.length; i++) {
      outputText += reverseMorseCode[morseWords[i]];
    }
  } else {
    // Loop through each character of the input
    for (let i = 0; i < text.length; i++) {
      // Get the current character
      const char = text[i].toLowerCase();

      // Check if the character is in the dictionary
      if (morseCode[char]) {
        // If it is, add the equivalent Morse code to the output string
        outputText += morseCode[char] + " ";
      }
    }
  }
  // Update the output element with the final output
  output.textContent = outputText;
});



const clearText = document.querySelector('#clear');
const textAreaInput = document.querySelector('#input');
const textAreaOutput = document.querySelector('#output');

clearText.addEventListener('click', function () {
	textAreaInput.value = '';
    textAreaOutput.textContent = '';
});