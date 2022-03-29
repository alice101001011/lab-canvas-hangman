class Hangman {
  constructor(words) {
    this.words = words; // array of words that are randomly chosen as secretWord
    this.secretWord = this.pickWord(); // secretWord picked with .pickWord (method to randomly pick word from words)
    this.letters = []; // array of all letters that were clicked -> letters should only be able to be clicked + added once; implement in assCorrectLetter + addWrongLetter to automatically add clicked letters
    this.guessedLetters = ""; // string of correctly guessed letters ->
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 64 && keyCode <= 90) return true;
    else return false;
  }

  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) return true;
    else return false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.letters.push(letter);

    //this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else return true;
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();

    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here

    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
}

document.addEventListener("keydown", (event) => {
  /* when player presses key:
  
  1. if letter is inside of our keycode range & not yet clicked (not part of letters)
     -> true:
        1.1 check if clicked letter is part of secretWord (had to include condition that it's not yet game over, to prevent further user input if that would be the case)
        -> if yes:
           - add to guessedLetters
           - output correct letter on canvas in the right place: loop through secretWord, and if letter of secretWord at index corresponds to clicked letter, output letter on canvas (with writeCorrectLetter, which takes index as argument)
           - check if all letters guessed correctly (checkWinner) -> output winner image (HangmanCanvas.winner)
        -> if letter not part of secretWord AND also user has not won yet:
           - use addWrongLetter to decrease errorsLeft + add letter to letters array
           - if there are still more than 0 errors left,output wrong letter to canvas with writeWrongLetter (takes letter and errorsLeft as arguments)
           - check if there are no guesses left (checkGameOver) -> ouput loser image (HangmanCanvas.gameOver)
    
           there's still some weird behaviour and some things are not working like they should, and i probably overcomplicated things and could refactor the code below, but ran out of time and will have to come back to it another time,
*/

  const letter = event.key;
  const keyCode = event.keyCode;

  if (hangman.checkIfLetter(keyCode) && hangman.checkClickedLetters(letter)) {
    if (hangman.secretWord.includes(letter) && !hangman.checkGameOver()) {
      hangman.addCorrectLetter(letter);
      for (let i = 0; i < hangman.secretWord.length; i++) {
        if (hangman.secretWord[i] === letter) {
          hangmanCanvas.writeCorrectLetter(i);
        }
      }
    } else if (!hangman.secretWord.includes(letter) && !hangman.checkWinner()) {
      hangman.addWrongLetter(letter);
      if (hangman.errorsLeft >= 0) {hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft)};
    }
    
  } else if (!hangman.checkIfLetter(keyCode)) {
    alert("Please press a key from a - z");
  } else alert("You pressed this key already!");

  if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }
  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  }
});
